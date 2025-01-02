import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from '@/lib/dbLib';
// import admin from '@/firebase-config';
import routes from '@/routes';

// تحميل المتغيرات البيئية
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// الاتصال بقاعدة البيانات
connectDB();

// استخدام Routes
app.use(express.json());
app.use("/api", routes);

// Socket.io للتحديث الحي
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("orderUpdate", (data) => {
    console.log("Order updated:", data);
    io.emit("updateStatus", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});