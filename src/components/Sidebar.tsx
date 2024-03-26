'use client'
import React, { useState,useEffect } from 'react';
import styles from './Sidebar.module.css';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

interface MenuItem {
  title: string;
  link: string;
}

interface SidebarProps {
  items: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const {data: session, status} = useSession()

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles['toggle-btn']} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={styles.menu}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      {session ? (
        <Link href="/api/auth/signin">
          <div className={`${styles['sign-link']}`}>
            Sign-In
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signout">
          <div className={`${styles['sign-link']}`}>
            Sign-Out
          </div>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

(
  <Link href="/api/auth/signout">
    <div className={`${styles['sign-link']} ${styles['sign-out']}`}>
      Sign-Out
    </div>
  </Link>
)