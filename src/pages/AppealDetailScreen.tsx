import React, { useState } from 'react';
import { Button, Card, Badge, cn } from '../components/ui';
import { Download, Edit, UploadCloud, ChevronRight, File as FileIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function AppealDetailScreen() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'analysis' | 'letter' | 'timeline' | 'documents'>('analysis');

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-8 md:py-12 w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-caption text-text-muted mb-6">
           <Link to="/my-appeals" className="hover:underline">My Appeals</Link>
           <ChevronRight size={14} />
           <span className="text-text-primary">Appeal #{id || '001'} — Cardiac Catheterization Denial</span>
        </div>

        {/* Header Card */}
        <Card className="p-6 mb-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
           <div>
              <Badge variant="warning" className="mb-4">Status: Under Review</Badge>
              <h1 className="text-h2 mb-3">Appeal #{id || '001'} — Cardiac Catheterization Denial</h1>
              <div className="flex flex-wrap gap-4 text-body-small text-text-secondary">
                 <span>Submitted: Dec 5, 2024</span>
                 <span className="hidden sm:block">|</span>
                 <span>Insurance: BlueCross</span>
                 <span className="hidden sm:block">|</span>
                 <span>Patient: Jane Doe</span>
              </div>
           </div>
           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
              <Button variant="secondary" className="w-full sm:w-auto"><Download size={16} className="mr-2" /> Letter</Button>
              <Button className="w-full sm:w-auto">Share with Doctor</Button>
           </div>
        </Card>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-border mb-8 sticky top-[72px] z-40 bg-background pt-2">
           {[
             { id: 'analysis', label: 'Analysis' },
             { id: 'letter', label: 'Appeal Letter' },
             { id: 'timeline', label: 'Timeline' },
             { id: 'documents', label: 'Documents' },
           ].map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={cn(
                 "px-6 py-4 font-semibold text-sm whitespace-nowrap transition-colors relative",
                 activeTab === tab.id ? "text-primary" : "text-text-secondary hover:text-text-primary"
               )}
             >
               {tab.label}
               {activeTab === tab.id && (
                 <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-primary rounded-t-full" />
               )}
             </button>
           ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'analysis' && (
            <div className="opacity-70 pointer-events-none filter grayscale-[50%]">
               {/* Read-only representation of the Review Screen */}
               <Card className="p-12 text-center">
                  <h3 className="text-h3 text-text-muted mb-2">Analysis View</h3>
                  <p className="text-body-small">This tab contains the read-only analysis sections shown during creation.</p>
               </Card>
            </div>
          )}

          {activeTab === 'letter' && (
            <Card className="p-8">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-h3">Final Appeal Letter</h3>
                 <div className="flex gap-2">
                    <Button variant="secondary" size="sm"><Edit size={16} className="mr-2"/> Edit</Button>
                    <Button size="sm"><Download size={16} className="mr-2"/> PDF</Button>
                 </div>
               </div>
               <div className="bg-gray-50 border border-border rounded-[12px] p-8 text-body font-serif leading-relaxed text-text-primary whitespace-pre-wrap">
{`[Your Name]
[Your Address]
[City, State, Zip]
[Your Phone Number]
[Your Email]

Dec 5, 2024

Appeals Department
BlueCross BlueShield
[Insurance Company Address]
[City, State, Zip]

RE: Appeal of Denial for Cardiac Catheterization
Patient Name: Jane Doe
Policy/ID Number: XYZ123456789
Claim Number: 987654321

To Whom It May Concern:

I am writing to formally appeal the decision to deny coverage for the cardiac catheterization procedure requested by my physician, Dr. John Smith. According to the denial letter dated Nov 28, 2024, the procedure was deemed "not medically necessary." 

I respectfully disagree with this determination. This treatment is definitively standard of care for my specific symptomatic presentation and is supported by the 2024 ACC/AHA guidelines for the management of patients with my diagnosis.

Attached, please find literature and letters of medical necessity from my care team establishing that...`}
               </div>
            </Card>
          )}

          {activeTab === 'timeline' && (
            <div className="max-w-2xl">
               <div className="relative pl-8 border-l-2 border-border space-y-10 py-4">
                  {[
                    { date: 'Jan 5, 2025 (Expected)', title: 'Insurance response expected', status: 'pending', icon: Clock, desc: 'Maximum timeframe for standard appeal response.' },
                    { date: 'Dec 6, 2024', title: 'Letter sent to insurance', status: 'completed', icon: CheckCircle2, desc: 'Sent via certified mail and fax to BlueCross.' },
                    { date: 'Dec 5, 2024', title: 'Analysis generated by CareGuard', status: 'completed', icon: CheckCircle2, desc: 'Letter formulated. Found 23% clinical match discrepancy.' },
                    { date: 'Dec 5, 2024', title: 'Appeal submitted', status: 'completed', icon: CheckCircle2, desc: 'Original denial letter uploaded.' }
                  ].map((event, i) => (
                    <div key={i} className="relative">
                       <div className={cn(
                          "absolute -left-[43px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-background",
                          event.status === 'completed' ? 'bg-success text-white' : 'bg-surface border-border text-text-muted'
                       )}>
                          <event.icon size={14} />
                       </div>
                       <h4 className={cn("text-h3 mb-1", event.status === 'pending' && "text-text-muted")}>{event.title}</h4>
                       <p className="text-caption text-text-secondary uppercase tracking-widest mb-2 font-semibold">{event.date}</p>
                       <p className="text-body-small text-text-secondary">{event.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6">
                  <h3 className="text-h3 mb-4">Appeal Documents</h3>
                  <div className="space-y-3 mb-6">
                     <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-surface hover:border-primary transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <FileIcon className="w-8 h-8 text-primary opacity-80" />
                           <div>
                              <p className="text-body-small text-text-primary font-semibold">Generated Appeal Letter.pdf</p>
                              <p className="text-caption text-text-muted">Generated Dec 5</p>
                           </div>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity"><Download size={16}/></Button>
                     </div>
                     <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-surface hover:border-primary transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <FileIcon className="w-8 h-8 text-warning opacity-80" />
                           <div>
                              <p className="text-body-small text-text-primary font-semibold">Original_Denial_Notice.pdf</p>
                              <p className="text-caption text-text-muted">Uploaded Dec 5</p>
                           </div>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity"><Download size={16}/></Button>
                     </div>
                  </div>
                  
                  <div className="w-full rounded-[12px] border-2 border-dashed border-border-dashed p-6 text-center hover:bg-primary-light hover:border-primary transition-colors cursor-pointer">
                     <UploadCloud className="w-6 h-6 text-primary mx-auto mb-2" />
                     <p className="text-body-small font-semibold">Upload Additional Document</p>
                  </div>
               </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
