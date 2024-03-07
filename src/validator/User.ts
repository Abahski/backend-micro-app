import Joi from "joi";

const roles = ['User', 'Admin']
const jenisKelamin = ['Laki-laki', 'Perempuan']

export const UserValidator = Joi.object({
	Fullname: Joi.string().required(),
	Alamat: Joi.string().required(),
	Jenis_Kelamin: Joi.string().valid(...jenisKelamin).required(),
	Username: Joi.string().required(),
	Password: Joi.string().required(),
	Role: Joi.string().valid(...roles).required()
})