import { check, validationResult } from "express-validator";
import Response from "../helpers/Response";
import HttpStatus from "http-status-codes";

/**
 * @export
 * @class Validator
 */
class Validator {
  /**
   * Validate input
   * @static
   * @returns {object} error description OR return next middleware
   */
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return Response.errorMessage(res, errorMessage, HttpStatus.BAD_REQUEST);
    }
    return next();
  };

  /**
   * Validate album ID
   * @static
   * @returns {object} errors
   */
  static photoRules() {
    return [
      check("albumId", "Album ID should be numeric").isNumeric().notEmpty()
    ];
  }

}

export default Validator;
