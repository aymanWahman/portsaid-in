'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setCartItems } from '@/redux/features/cart/cartSlice';

function CartLoader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialCartItems = localStorage.getItem('cartItems');
    if (initialCartItems) {
      dispatch(setCartItems(JSON.parse(initialCartItems)));
    }
  }, [dispatch]);

  return null;
}

export default CartLoader;