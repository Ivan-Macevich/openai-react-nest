import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('openai', () => {
  const envVarsSchema = Joi.object({
    OPENAI_API_KEY: Joi.string().required(),
    OPENAI_VERSION: Joi.string().required(),
  }).unknown();

  const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    apiKey: envVars.OPENAI_API_KEY,
    gpt_version: envVars.OPENAI_VERSION,
  };
});
