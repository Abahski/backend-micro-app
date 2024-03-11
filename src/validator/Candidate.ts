import Joi from "joi"

export const CandidateValidator = Joi.object({
	name: Joi.string().required(),
	visi_mission: Joi.array().items(Joi.string()).required(),
	coalition: Joi.array().items(Joi.string()).required(),
	image: Joi.string().required(),
	party: Joi.number().required()
})