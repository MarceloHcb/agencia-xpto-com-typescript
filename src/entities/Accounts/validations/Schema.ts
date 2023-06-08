import Joi from "joi";

export default class Validator {
  private static schemaEmail = Joi.string().email().required();
  static validateEmail(email: string): void {
    const { error } = Validator.schemaEmail.validate(email);
    if (error) {
      throw new Error(error.message);
    }
  }
}
