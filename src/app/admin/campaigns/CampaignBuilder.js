"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "../builder.module.css";

export default function CampaignBuilder({ templates, customerTypes }) {
  const searchParams = useSearchParams();
  const quickCampaign = searchParams?.get("quick");

  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState(quickCampaign || "");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [audience, setAudience] = useState("All");
  
  // Variables for template
  const [variables, setVariables] = useState(["", "", ""]);
  
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activeTemplate = templates.find(t => t.id === selectedTemplate);

  const getPreviewText = () => {
    if (!activeTemplate) return "";
    let text = activeTemplate.content;
    text = text.replace("{{1}}", variables[0] || "[Customer Name]");
    text = text.replace("{{2}}", variables[1] || "[Variable 2]");
    text = text.replace("{{3}}", variables[2] || "[Variable 3]");
    return text;
  };

  const handleSend = async () => {
    setIsSending(true);
    try {
      const res = await fetch("/api/admin/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: campaignName,
          templateId: selectedTemplate,
          audience,
        }),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.formCard} style={{ textAlign: 'center' }}>
        <h3 className={styles.pageTitle} style={{ color: '#059669' }}>Campaign Sent!</h3>
        <p className={styles.pageSubtitle} style={{ marginBottom: '24px' }}>
          Your campaign "{campaignName}" has been queued for delivery.
        </p>
        <button 
          onClick={() => window.location.href = '/admin'}
          className={styles.btnSend}
          style={{ margin: '0 auto' }}
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.formCard}>
        {/* STEP 1 */}
        {step === 1 && (
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>
              <span className={styles.stepNumber}>1</span>
              Setup Campaign
            </h3>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Campaign Name</label>
              <input 
                type="text" 
                value={campaignName}
                onChange={e => setCampaignName(e.target.value)}
                placeholder="e.g. Onam Heritage Offer"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>WhatsApp Template</label>
              <select 
                value={selectedTemplate}
                onChange={e => setSelectedTemplate(e.target.value)}
                className={styles.formSelect}
              >
                <option value="">-- Select Template --</option>
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.name} ({t.category})</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Audience</label>
              <select 
                value={audience}
                onChange={e => setAudience(e.target.value)}
                className={styles.formSelect}
              >
                <option value="All">All Customers</option>
                {customerTypes?.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className={styles.actionButtons}>
              <button 
                disabled={!campaignName || !selectedTemplate}
                onClick={() => setStep(2)}
                className={styles.btnSend}
              >
                Next: Customize Message
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && activeTemplate && (
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>
              <span className={styles.stepNumber}>2</span>
              Customize Message
            </h3>

            <div className={styles.formGroup} style={{ marginBottom: '32px' }}>
              <label className={styles.formLabel}>Original Template Content:</label>
              <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #eee', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {activeTemplate.content}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{"{{1}} (Usually Customer Name)"}</label>
              <input 
                type="text" 
                value={variables[0]}
                onChange={e => {
                  const newVars = [...variables];
                  newVars[0] = e.target.value;
                  setVariables(newVars);
                }}
                placeholder="Leave blank to auto-fill customer name"
                className={styles.formInput}
              />
            </div>
            
            {activeTemplate.content.includes("{{2}}") && (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{"{{2}}"}</label>
                <input 
                  type="text" 
                  value={variables[1]}
                  onChange={e => {
                    const newVars = [...variables];
                    newVars[1] = e.target.value;
                    setVariables(newVars);
                  }}
                  placeholder="e.g. 20% OFF your next stay"
                  className={styles.formInput}
                />
              </div>
            )}

            {activeTemplate.content.includes("{{3}}") && (
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{"{{3}}"}</label>
                <input 
                  type="text" 
                  value={variables[2]}
                  onChange={e => {
                    const newVars = [...variables];
                    newVars[2] = e.target.value;
                    setVariables(newVars);
                  }}
                  placeholder="e.g. 31 August 2026"
                  className={styles.formInput}
                />
              </div>
            )}

            <div className={styles.actionButtons}>
              <button 
                onClick={() => setStep(1)}
                className={styles.btnSecondary}
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                className={styles.btnSend}
              >
                Next: Review
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className={styles.stepWrapper}>
            <h3 className={styles.stepTitle}>
              <span className={styles.stepNumber}>3</span>
              Review & Send
            </h3>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Campaign Name:</label>
              <div style={{ fontSize: '1.1rem', color: 'var(--primary-violet)' }}>{campaignName}</div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Audience:</label>
              <div style={{ fontSize: '1.1rem', color: 'var(--primary-violet)' }}>{audience}</div>
            </div>

            <div className={styles.actionButtons}>
              <button 
                onClick={() => setStep(2)}
                className={styles.btnSecondary}
              >
                Back to Edit
              </button>
              <button 
                onClick={handleSend}
                disabled={isSending}
                className={styles.btnSend}
              >
                {isSending ? "Sending..." : "SEND CAMPAIGN"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Live Preview Sidebar */}
      <div className={styles.previewCard}>
        <h3 className={styles.previewHeader}>Live Preview</h3>
        <div className={styles.waPreviewBox}>
          {activeTemplate ? (
            <div className={styles.waBubble}>
              {getPreviewText()}
            </div>
          ) : (
            <div className={styles.placeholderText}>
              Select a template to see preview
            </div>
          )}
        </div>
      </div>
    </>
  );
}
