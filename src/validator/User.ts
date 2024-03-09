import Joi from "joi";

const roles = ['User', 'Admin']
const jenisKelamin = ['Laki-laki', 'Perempuan']

export const UserValidator = Joi.object({
	fullname: Joi.string().required(),
	address: Joi.string().required(),
	gender: Joi.string().valid(...jenisKelamin).required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
	role: Joi.string().valid(...roles).required()
})