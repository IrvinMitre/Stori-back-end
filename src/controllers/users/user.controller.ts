import { JWT_Response } from "../../interfaces/jwt.interface";
import UserService from "../../services/user.service";
import { Request, Response } from "express";
import { isValidObject } from "../../guards/isValidObject.guard";
import BaseError from "../../shared/errors/base";
import { verifyPassword } from "../../utils/passwordUtils";
import { createJWTToken, createJWTRefreshToken } from "../../utils/authUtils";
import { UserInterface } from "../../interfaces/user.interface";
import { LoginUserDto } from "../../dtos/users/loginUser.dto";
import { ErrorCodes, ErrorMessages } from "../../shared/errors/errors";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  login = async (
    req: Request,
    res: Response
  ): Promise<Response<JWT_Response> | Error> => {
    console.log(req.body)
    if (!isValidObject<LoginUserDto>(req.body, ["email", "password"])) {
      return res
        .status(400)
        .send(
          new BaseError(ErrorCodes.BAD_REQUEST, 400, ErrorMessages.BAD_REQUEST)
        );
    }
    try {
      const user = await this.userService.getUserByEmail(req.body.email);
      if (!user) {
        return res
          .status(404)
          .send(
            new BaseError(
              ErrorCodes.USR_NOT_EXST,
              404,
              ErrorMessages.USR_NOT_EXST
            )
          );
      }
      console.log(await verifyPassword(req.body.password, user.password))
      console.log(req.body.password, user.password)
      if (!(await verifyPassword(req.body.password, user.password))) {
        return res
          .status(403)
          .send(
            new BaseError(
              ErrorCodes.USR_PSWRD_FAILED,
              404,
              ErrorMessages.USR_PSWRD_FAILED
            )
          );
      }

      const response: JWT_Response = {
        jwt: createJWTToken(user.toJSON()),
        refresh_jwt: createJWTRefreshToken(user.toJSON()),
      };

      return res.status(200).send(response);
    } catch (error) {
      return res
        .status(500)
        .send(
          new BaseError(
            ErrorCodes.GENERIC_ERROR,
            500,
            ErrorMessages.GENERIC_ERROR
          )
        );
    }
  };
}

export default UserController;
