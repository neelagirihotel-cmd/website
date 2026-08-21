import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Send, Users, Activity } from "lucide-react";
import styles from "./dashboard.module.css";

export default async function AdminDashboard() {
  const customerCount = await prisma.customer.count();
  const campaignCount = await prisma.campaign.count();
  
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.pageTitle}>Dashboard</h2>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <Users className={styles.statIcon} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Total Customers</p>
            <p className={styles.statValue}>{customerCount}</p>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <Send className={styles.statIcon} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Campaigns Sent</p>
            <p className={styles.statValue}>{campaignCount}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper}>
            <Activity className={styles.statIcon} />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Engagement Rate</p>
            <p className={styles.statValue}>76%</p>
          </div>
        </div>
      </div>

      <div className={styles.quickCampaignsSection}>
        <h3 className={styles.sectionHeader}>
          <span className="mr-2">🚀</span> Quick Campaigns
        </h3>
        
        <div className={styles.quickGrid}>
          {["Weekend Offer", "Festival Offer", "Flash Sale", "Repeat Guest"].map((c) => (
            <Link 
              href={`/admin/campaigns?quick=${encodeURIComponent(c)}`}
              key={c}
              className={styles.quickCard}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className={styles.customCampaignWrap}>
          <Link 
            href="/admin/campaigns"
            className="btn-primary"
          >
            Create Custom Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
