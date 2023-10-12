import { Router } from 'express';
import UserController from '../../controllers/users';

export class UserRouter {
  user = new UserController();
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init = () => {
    this.router.post('/login', this.user.login);
    this.router.post('/registerUser', this.user.registration);
  };
}

const userRoutes = new UserRouter();
userRoutes.init();
export default userRoutes.router;