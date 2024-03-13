import Joi from 'joi'


export const ArticleValidator = Joi.object({
	title: Joi.string().required(),
	image: Joi.string().required(),
	content: Joi.string().required(),
	description: Joi.string().required(),
	users: Joi.number().required()
})