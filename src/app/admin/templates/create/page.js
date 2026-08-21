"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../builder.module.css";

export default function CreateTemplatePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Promotional");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, content }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create template");
      }

      router.push("/admin/templates");
      router.refresh();
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        <h2 className={styles.pageTitle}>Create Custom Template</h2>
        <p className={styles.pageSubtitle}>Define a new WhatsApp message template. Use {"{{1}}"}, {"{{2}}"} for variables.</p>
      </div>

      <div className={styles.builderContainer}>
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{ padding: '12px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '4px', marginBottom: '16px', fontSize: '0.9rem' }}>
                {error}
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Template Name</label>
              <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Special Discount"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Category</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value)}
                className={styles.formSelect}
              >
                <option value="Promotional">Promotional</option>
                <option value="Transactional">Transactional</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message Content</label>
              <textarea 
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Dear {{1}}, enjoy {{2}}% off your next stay!"
                className={styles.formInput}
                rows={6}
                required
              />
            </div>

            <div className={styles.actionButtons}>
              <button 
                type="button"
                onClick={() => router.back()}
                className={styles.btnSecondary}
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isSubmitting || !name || !content}
                className={styles.btnSend}
              >
                {isSubmitting ? "Saving..." : "Save Template"}
              </button>
            </div>
          </form>
        </div>

        {/* Live Preview */}
        <div className={styles.previewCard}>
          <h3 className={styles.previewHeader}>Live Preview</h3>
          <div className={styles.waPreviewBox}>
            {content ? (
              <div className={styles.waBubble}>
                {content}
              </div>
            ) : (
              <div className={styles.placeholderText}>
                Start typing to see preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
