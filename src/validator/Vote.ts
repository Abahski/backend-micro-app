 import Joi from "joi";

 export const VoteValidator = Joi.object ({
 	canditate: Joi.number().required(),
 	users: Joi.number().required()
 })