import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel } from '../controllers/adminController.js';
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router();


adminRouter.post("/login", loginAdmin)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)

export default adminRouter;