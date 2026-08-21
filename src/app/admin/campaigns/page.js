import { prisma } from "@/lib/prisma";
import CampaignBuilder from "./CampaignBuilder";
import styles from "../builder.module.css";

export default async function CampaignsPage() {
  const templates = await prisma.template.findMany({
    orderBy: { createdAt: "desc" },
  });

  const uniqueCustomerTypes = await prisma.customer.findMany({
    select: { customerType: true },
    distinct: ['customerType'],
  });

  return (
    <div className={styles.pageContainer}>
      <div>
        <h2 className={styles.pageTitle}>Create Campaign</h2>
        <p className={styles.pageSubtitle}>Send promotional WhatsApp messages using approved Meta templates.</p>
      </div>

      <div className={styles.builderContainer}>
        <CampaignBuilder 
          templates={templates} 
          customerTypes={uniqueCustomerTypes.map(c => c.customerType).filter(Boolean)} 
        />
      </div>
    </div>
  );
}
