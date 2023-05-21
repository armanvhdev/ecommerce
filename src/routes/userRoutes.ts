import express from 'express';

const router = express.Router();

import {
   authenticateUser,
   authorizePermission,
} from '../middleware/authentication';

import {
   getAllUsers,
   getUser,
   showCurrentUser,
   updateUser,
   updateUserPassword,
} from '../controller/userController';

router.route('/').get(authenticateUser, authorizePermission, getAllUsers);

router.route('/showMe').get(showCurrentUser);
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);

router.route('/:id').get(authenticateUser, authorizePermission, getUser);

export { router as userRouter };
