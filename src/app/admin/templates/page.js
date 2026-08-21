import { prisma } from "@/lib/prisma";
import styles from "../crm.module.css";

export default async function TemplatesPage() {
  const templates = await prisma.template.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Approved Message Templates</h2>
        <a href="/admin/templates/create" className="btn-primary">
          Create Template
        </a>
      </div>

      <div className={styles.templatesGrid}>
        {templates.map((template) => (
          <div key={template.id} className={styles.templateCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{template.name}</h3>
              <span className={styles.statusBadge}>
                APPROVED
              </span>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.waBubble}>
                {template.content}
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.categoryText}>
                Category: {template.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
