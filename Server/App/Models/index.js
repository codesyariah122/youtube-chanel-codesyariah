// import {fakeDB} from '../Configs/index.js'

// export const AllData = () => {
// 	return fakeDB()
// }

// export const FindById = (id) => {
// 	const users = fakeDB().find(data => data.id == id) 

// 	return (!users) ? [{message: `User id : ${id} tidak ditemukan`}] : users
// }
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: String,
	email: String,
	fullname: String,
	phone: String,
	isActive: Boolean,
	city: String,
	bio: String
})

userSchema.method('toJSON', function(){
	const {__v, _id, ...object} = this.toObject()
	object.id = _id
	return object
})

export const UserData = mongoose.model('users', userSchema)