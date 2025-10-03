# 🏥 Bookadoc - Appointment Booking System

<p style="text-align:justify;">A backend system for a Healthcare Appointment Booking Platform built with Node.js, Express, MongoDB, and Cloudinary, featuring role-based APIs for Users, Doctors, and Admins. The system enables secure appointment booking, doctor availability management, and payment handling via Razorpay.</p>

This project highlights scalable backend design, modular architecture, and production deployment.

## 🚀 Features

**👤 User**

- Registeration & Login

- Manage profile with image upload

- Book, view, and cancel appointments

- Pay securely via Razorpay & verify payments

**👨‍⚕️ Doctor**

- Login with role-based authentication

- View, complete, and cancel appointments

- Manage availability

- Access personalized dashboard & update profile

**🛡️ Admin**

- Login with admin privileges

- Manage all appointments

- Add new doctors with profile image upload

- View all doctors and change availability

- Access admin dashboard

**🏗️ Tech Stack**

- Backend: Node.js, Express.js

- Database: MongoDB (Mongoose ORM)

- Authentication: JWT-based role handling (User, Doctor, Admin)

- File Uploads: Multer + Cloudinary

- Payments: Razorpay Integration

- Deployment: Render (Backend Hosting)

## ⚡ Getting Started
**Prerequisites**

- Node.js v18+

- MongoDB connection string

- Cloudinary credentials

- Razorpay credentials

**Installation**

Clone repository

```
git clone https://github.com/your-username/healthcare-appointment-system.git
cd healthcare-appointment-system
```

Install dependencies
```
npm install
```

Run development server
```
npm run dev
```

Environment Variables

- Create a .env file in the root directory:

```
PORT=4000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
RAZORPAY_KEY_ID=xxxx
RAZORPAY_KEY_SECRET=xxxx
```

## 🧪 API Testing

A Postman Collection (healthcare_api_collection.json) is included for quick testing.

The backend is deployed on Render, so recruiters can test APIs without cloning.

A demonstration video will be provided to showcase workflows (user booking, doctor dashboard, admin management).

**🎯 Demonstration**

📺 Video walkthrough (to be added) will show:

User registration, profile update, and appointment booking

Doctor dashboard & appointment management

Admin dashboard & doctor management

## 📈 Future Enhancements

- Email & SMS notifications for appointments

- Analytics dashboards for doctors & admins

- Role-based frontend UI with React

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

## 📜 License

This project is licensed under the MIT License.

## ⚡ Built with passion for real-world healthcare systems.
