 import Joi from "joi";

 export const PartyValidator = Joi.object({
 	name: Joi.string().required(),
 	leader_name: Joi.string().required(),
 	address: Joi.string().required(),
 	visi_mission: Joi.string().required(),
 	image: Joi.string().required(),
 	// candidate: Joi.number().required()
 })