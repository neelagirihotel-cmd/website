"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Papa from "papaparse";

export default function ImportCustomers() {
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsImporting(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          // Normalize column names to map to prisma fields
          // Expected: Name, Mobile, Customer Type, City, Last Stay
          const customers = results.data.map(row => {
            const getVal = (key1, key2) => row[key1] || row[key2] || "";
            return {
              name: getVal("Name", "name"),
              mobile: getVal("Mobile", "mobile").replace(/\D/g, ''), // Strip non-digits
              customerType: getVal("Customer Type", "customerType") || "Guest",
              city: getVal("City", "city") || null,
              lastStay: getVal("Last Stay", "lastStay") ? new Date(getVal("Last Stay", "lastStay")) : null,
            };
          }).filter(c => c.name && c.mobile); // Must have name and mobile

          if (customers.length === 0) {
            alert("No valid rows found in CSV. Please ensure you have 'Name' and 'Mobile' columns.");
            setIsImporting(false);
            return;
          }

          const res = await fetch("/api/admin/customers/import", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customers }),
          });

          const data = await res.json();
          if (res.ok) {
            alert(`Successfully imported ${data.count} customers!`);
            router.refresh();
          } else {
            alert(`Import failed: ${data.error}`);
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred during import.");
        } finally {
          setIsImporting(false);
          // Reset file input
          if (fileInputRef.current) fileInputRef.current.value = "";
        }
      },
      error: (error) => {
        alert("Failed to parse CSV file: " + error.message);
        setIsImporting(false);
      }
    });
  };

  return (
    <>
      <input 
        type="file" 
        accept=".csv" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: "none" }} 
      />
      <button 
        className="btn-outline" 
        onClick={() => fileInputRef.current?.click()}
        disabled={isImporting}
        style={{ marginRight: "12px" }}
      >
        {isImporting ? "Importing..." : "Import CSV"}
      </button>
    </>
  );
}
