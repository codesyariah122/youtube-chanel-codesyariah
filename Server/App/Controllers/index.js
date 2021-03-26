import mongoose from 'mongoose'
import validator from 'validator'
import {UserData} from '../Models/index.js'
import {handleValidationError} from './validators.js'

export const getAllData = async(req, res) => {
	try{
		const users = await UserData.find()
		res.status(200).json({
			data: users
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const findById = async(req, res) => {
	const id = req.params.id
	try{
		const users = await UserData.findById(id)
		res.status(200).json({
			data: users
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const findByUsername = async(req, res) => {
	const username = req.params.username

	try {
		const users = await UserData.find({
			"username": {$regex: `.*${username}.*`}
		}, (err, result) => {
			if(result.length === 0) {
				res.status(201).json({
					message: `Username : ${username} tidak ditemukan`
				})
			}else{
				res.status(200).json({
					data: result
				})
			}
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const createUser = async(req, res) => {
	const userData = req.body
	try{
		const users = new UserData(userData)

		await users.save()
		res.status(200).json({
			data: users
		})
	}catch(err){
		console.log(err.message)
		// if(err.name === "ValidationError"){
		// 	handleValidationError(err, res)
		// }
		res.status(404).json({
			message: err.message
		})
	}
}

export const updateUser = async(req, res) => {
	const id = req.params.id
	const {username, email, fullname, phone, isActive, city, bio} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({message: `Username dengan id : ${id} tidak ditemukan`})
	
	const users = {username, email, fullname, phone, isActive, city, bio, id} 
	
	await UserData.findByIdAndUpdate(id, users, {new: true})

	res.status(200).json({
		data: users
	})

}

export const deleteUser = async(req, res) => {
	const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({
		message: `User dengan id : ${id} tidak ditemukan`
	})

	await UserData.findByIdAndRemove(id)

	res.status(200).json({
		message: `User dengan id : ${id} berhasil dihapus`
	})
}