
import Joi from "joi";

export const personSchema = Joi.object({
  name: Joi.object({
    en: Joi.string().required(),
    bn: Joi.string().required(),
    cn: Joi.string().required(),
    ar: Joi.string().required(),
  }),
  address: Joi.object({
    en: Joi.string().required(),
    bn: Joi.string().required(),
    cn: Joi.string().required(),
    ar: Joi.string().required(),
  }),
});
