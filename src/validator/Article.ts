import Joi from 'joi'


export const ArticleValidator = Joi.object({
	title: Joi.string().required(),
	image: Joi.string().required(),
	content: Joi.string().required(),
	headline: Joi.string().required(),
	users: Joi.number().required()
})