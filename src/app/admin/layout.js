import styles from "./adminLayout.module.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export const metadata = {
  title: "Neelagiri Heritage - Marketing Console",
  description: "WhatsApp Promotion Panel",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <div className={styles.adminContainer}>
      <AdminSidebar />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Neelagiri Heritage Marketing Console</h1>
          <div className={styles.headerActions}>
            <span className={styles.userText}>Logged in as {session.user?.name}</span>
            <a href="/api/auth/signout" className={styles.signOut}>Sign Out</a>
          </div>
        </header>
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
