import express from 'express';
import { 
  loginAdmin, 
  appointmentsAdmin, 
  appointmentCancel,
  addDoctor, 
  allDoctors, 
  adminDashboard
 } from '../controllers/adminController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
import { changeAvailablity } from '../controllers/doctorController.js';

const adminRouter = express.Router();


adminRouter.post("/login", loginAdmin)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;