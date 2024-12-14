'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  MapIcon,
  BuildingOfficeIcon,
  HomeIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/tourist-spots', label: 'الأماكن السياحية', icon: MapIcon },
    { href: '/restaurants', label: 'المطاعم', icon: BuildingOfficeIcon },
    { href: '/hotels', label: 'الفنادق', icon: HomeIcon },
    { href: '/about', label: 'عن المدينة', icon: InformationCircleIcon },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    })
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">القائمة</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <nav className="p-4">
                <ul className="space-y-4">
                  {menuItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.href}
                        variants={itemVariants}
                        custom={i}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <Icon className="w-5 h-5 text-seaBlue" />
                          <span>{item.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
