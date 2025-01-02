import express from 'express';
import admin from '@/firebase-config';

const router = express.Router();

// نموذج لتسجيل طلب جديد
router.post("/orders", async (req, res) => {
  const { customerName, address, items } = req.body;
  // هنا يمكنك إضافة منطق لتسجيل الطلبات في Firebase أو MongoDB
  res.status(201).json({ message: "Order created successfully!" });
});

export default router;