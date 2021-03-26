// import {fakeDB} from '../Configs/index.js'

// export const AllData = () => {
// 	return fakeDB()
// }

// export const FindById = (id) => {
// 	const users = fakeDB().find(data => data.id == id) 

// 	return (!users) ? [{message: `User id : ${id} tidak ditemukan`}] : users
// }
import mongoose from 'mongoose'
import validator from 'node-mongoose-validator'
import validate from 'validator'

// const usernameValid = [
// 	validate({
// 		validator: 'isLength',
// 		arguments: [3, 50],
// 		message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
// 	}),
// 	validate({
// 		validator: 'isAlphanumeric',
// 		passIfEmpty: false, 
// 		message: 'Username should contain alpha-numeric characters only'
// 	})
// ]


const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Enter a username.'],
		unique: [true, 'That username is taken'],
		lowercase: true,
		trim: true
	},
	email: {
		type: String,
		required: [true, 'Enter a email.'],
		unique: [true, 'That email is already taken'],
		lowercase: true,
		trim: true,
	},
	fullname: {
		type: String,
		required: [true, 'Enter a username.']
	},
	phone: {
		type: String,
		required: [true, 'Enter your phone number.'],
		validate: [validate.isMobilePhone, 'Enter valid your phone number']
	},
	isActive: Boolean,
	city: String,
	bio: String
})

userSchema.path('username').validate(validator.isAlphanumeric('en-US'), 'Username must be contain letter and number')
userSchema.path('email').validate(validator.isEmail(), 'Please enter valid email address')
// userSchema.path('phone').validate(validator.isMobilePhone, 'Please enter mobile phone use your country code')

userSchema.method('toJSON', function(){
	const {__v, _id, ...object} = this.toObject()
	object.id = _id
	return object
})

export const UserData = mongoose.model('users', userSchema)