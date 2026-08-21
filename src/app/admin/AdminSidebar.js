"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, MessageSquare, Send } from "lucide-react";
import styles from "./adminLayout.module.css";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Campaigns", href: "/admin/campaigns", icon: Send },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Templates", href: "/admin/templates", icon: MessageSquare },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Image 
          src="/logo.webp" 
          alt="Neelagiri Logo" 
          width={130} 
          height={40} 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                >
                  <item.icon className={styles.navIcon} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
