 import Joi from "joi";

 export const PartyValidator = Joi.object({
 	name: Joi.string().required(),
 	leader_name: Joi.string().required(),
 	address_name: Joi.string().required(),
 	visi_misiion: Joi.array().items(Joi.string()).required(),
 	image: Joi.string().required(),
 	candidate: Joi.number().required()
 })