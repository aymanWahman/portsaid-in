'use client';
import { FC, useEffect, useState } from 'react';
import connectDB from '@/lib/db'; 
import { OrderModel } from '@/models/Order';

const OrderDetails: FC = () => {
  const [orderDetails, setOrderDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      await connectDB(); // تأكد من الاتصال بقاعدة البيانات
      const orders = await OrderModel.find(); // جلب الطلبات
      setOrderDetails(orders);
    };

    fetchOrders();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">تفاصيل الطلب</h2>
      <ul className="space-y-2">
        {orderDetails.map(order => (
          <li key={order._id}>
            <strong>رقم الطلب:</strong> {order._id}
            <br />
            <strong>الحالة:</strong> {order.status}
            <br />
            <strong>المطعم:</strong> {order.restaurant}
            <br />
            <strong>العميل:</strong> {order.customer}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OrderDetails;