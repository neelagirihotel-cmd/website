import { prisma } from "@/lib/prisma";
import styles from "../crm.module.css";
import ImportCustomers from "./ImportCustomers";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Customers CRM</h2>
        <div>
          <ImportCustomers />
          <button className="btn-primary">
            Export Data
          </button>
        </div>
      </div>

      <div className={styles.tableWrap}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Type</th>
                <th>City</th>
                <th>Last Stay</th>
                <th>Opt-in</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className={styles.nameCell}>
                    {customer.name}
                  </td>
                  <td>
                    +{customer.mobile}
                  </td>
                  <td>
                    <span className={styles.badge}>
                      {customer.customerType}
                    </span>
                  </td>
                  <td>
                    {customer.city || "-"}
                  </td>
                  <td>
                    {customer.lastStay ? new Date(customer.lastStay).toLocaleDateString() : "-"}
                  </td>
                  <td>
                    {customer.optIn ? (
                      <span className={styles.statusYes}>✓</span>
                    ) : (
                      <span className={styles.statusNo}>Opted Out</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
