import React, { useState } from 'react';
import { Card, cn } from '../components/ui';
import { ExternalLink, BookOpen, AlertCircle, HeartHandshake, FileQuestion } from 'lucide-react';

export default function ResourcesScreen() {
  const [activeTab, setActiveTab] = useState<'rights' | 'help' | 'faq' | 'bias'>('rights');

  const tabs = [
    { id: 'rights', label: 'Your Rights', icon: BookOpen },
    { id: 'help', label: 'Find Help', icon: HeartHandshake },
    { id: 'faq', label: 'FAQ', icon: FileQuestion },
    { id: 'bias', label: 'Understanding Bias', icon: AlertCircle },
  ];

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-h1 mb-2">Resources</h1>
          <p className="text-body text-lg text-text-secondary">Learn about your rights, find help, and understand the appeals process.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-border mb-8 gap-x-8 gap-y-2">
           {tabs.map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={cn(
                 "py-4 flex items-center gap-2 font-semibold text-[16px] transition-colors relative",
                 activeTab === tab.id ? "text-primary" : "text-text-secondary hover:text-text-primary"
               )}
             >
               <tab.icon size={18} />
               {tab.label}
               {activeTab === tab.id && (
                 <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-primary rounded-t-full" />
               )}
             </button>
           ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
           {activeTab === 'rights' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "The Right to Appeal", body: "Every patient has the right to appeal a denial of coverage under the Affordable Care Act. Learn the specific steps and timelines required by law." },
                  { title: "Mental Health Parity", body: "Your mental health claim must be treated equally to physical health claims. Insurers cannot apply stricter limits or separate deductibles." },
                  { title: "Emergency Care Rights", body: "You cannot be denied emergency care based on your insurance status, nor can insurers require pre-authorization for emergency services." },
                  { title: "Age Discrimination in Care", body: "Treatment decisions must be based on health status and clinical efficacy, not strictly on chronological age cutoffs." }
                ].map((item, i) => (
                  <Card key={i} className="p-8 hover:border-primary transition-colors cursor-pointer group">
                     <h3 className="text-h3 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                     <p className="text-body-small mb-6">{item.body}</p>
                     <span className="text-primary font-semibold text-sm flex items-center gap-1">Learn More <ExternalLink size={14} /></span>
                  </Card>
                ))}
             </div>
           )}

           {activeTab === 'help' && (
             <div className="flex flex-col gap-4">
                {[
                  { name: "Patient Advocate Foundation", desc: "Free case management for patients with chronic, life-threatening and debilitating diseases.", tags: ["Legal Aid", "Free", "National"] },
                  { name: "Medicare Rights Center", desc: "A national nonprofit consumer service organization that works to ensure access to affordable health care for older adults.", tags: ["Seniors", "Medicare", "Navigation"] },
                  { name: "National Association of Healthcare Advocacy", desc: "Find a private patient advocate in your area to assist with complex cases.", tags: ["Directory", "Private"] }
                ].map((org, i) => (
                  <Card key={i} className="p-6 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                     <div className="flex-1">
                        <h3 className="text-h3 mb-2">{org.name}</h3>
                        <p className="text-body-small mb-4">{org.desc}</p>
                        <div className="flex gap-2">
                           {org.tags.map(tag => (
                             <span key={tag} className="px-2 py-1 bg-surface border border-border rounded text-xs font-semibold text-text-muted uppercase tracking-wider">{tag}</span>
                           ))}
                        </div>
                     </div>
                     <button className="text-primary font-semibold text-sm flex items-center gap-2 px-4 py-2 rounded-[8px] bg-primary-light hover:bg-primary-light/80 transition-colors shrink-0">
                        Visit Website <ExternalLink size={16} />
                     </button>
                  </Card>
                ))}
             </div>
           )}

           {activeTab === 'faq' && (
             <div className="max-w-[800px] flex flex-col gap-4">
                {[
                  { q: "How long do I have to appeal?", a: "Under federal law (the ACA), you typically have up to 180 days to file an internal appeal after receiving notice of a denial. However, some plans have shorter stated deadlines, so it is best to act within 30 days." },
                  { q: "What if my appeal is denied?", a: "If your internal appeal is denied, you have the right to an independent external review. CareGuard will provide instructions on how to request this state or federally managed review." },
                  { q: "Does CareGuard store my medical data?", a: "No. CareGuard processes your denial letter in memory to generate the analysis and draft your appeal. We do not persist or store your medical documents in our database." },
                  { q: "Can CareGuard guarantee my appeal will be approved?", a: "No system can guarantee a reversal. However, CareGuard dramatically increases your chances by ensuring your appeal addresses specific clinical guidelines and legally recognized fairness standards." }
                ].map((faq, i) => (
                  <Card key={i} className="p-6">
                     <details className="group">
                        <summary className="text-h3 font-semibold cursor-pointer list-none flex items-center justify-between">
                           {faq.q}
                           <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="text-body mt-4 text-text-secondary pt-4 border-t border-border">
                           {faq.a}
                        </p>
                     </details>
                  </Card>
                ))}
             </div>
           )}

           {activeTab === 'bias' && (
             <div className="max-w-[800px]">
                <Card className="p-8">
                   <AlertCircle className="w-12 h-12 text-warning mb-6" />
                   <h2 className="text-h2 mb-4">Understanding Algorithmic & Human Bias in Denials</h2>
                   <p className="text-body mb-6">
                     Healthcare denials are increasingly processed by algorithms that use historical data to determine "medical necessity." Unfortunately, this historical data often contains embedded biases. For example, if women were historically under-diagnosed for cardiovascular issues in a provider's data pool, the algorithm might deny a valid cardiac claim for a female patient today.
                   </p>
                   <h3 className="text-h3 mb-2">How we detect it:</h3>
                   <ul className="list-disc pl-5 space-y-2 text-body mb-6 text-text-secondary">
                     <li>We compare the language in your denial against our database of known biased phrasing.</li>
                     <li>We simulate what the algorithmic outcome would be if your demographic markers were changed.</li>
                     <li>We cross-reference the denial reasoning against pure clinical guidelines (unaffected by cost-saving algorithms).</li>
                   </ul>
                </Card>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
