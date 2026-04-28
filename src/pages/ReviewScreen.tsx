import React from 'react';
import { Stepper, Button, Card, Badge, cn } from '../components/ui';
import { ShieldCheck, Heart, Stethoscope, Scale, FileText, BookOpen, Download, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReviewScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[1000px] mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-h1 mb-2">Your Appeal Analysis</h1>
          <p className="text-body">CareGuard has reviewed your case. Here's what we found.</p>
        </div>
        
        <Stepper currentStep={4} /> {/* All complete */}

        {/* Summary Card */}
        <div className="w-full rounded-[24px] bg-gradient-to-br from-primary-light to-white p-8 mb-8 border border-border shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6 text-success">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-h2 mb-4">We've Found Concerns With Your Denial</h2>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Our analysis suggests your denial may not align with standard clinical guidelines. We've prepared an appeal letter for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="flex flex-col gap-1 p-4 bg-surface rounded-[12px] border border-border">
                  <span className="text-caption text-text-muted uppercase">Clinical Match</span>
                  <span className="font-bold text-danger">23%</span>
               </div>
               <div className="flex flex-col gap-1 p-4 bg-surface rounded-[12px] border border-border">
                  <span className="text-caption text-text-muted uppercase">Bias Risk</span>
                  <span className="font-bold text-warning">HIGH</span>
               </div>
               <div className="flex flex-col gap-1 p-4 bg-surface rounded-[12px] border border-border">
                  <span className="text-caption text-text-muted uppercase">Appeal Strength</span>
                  <span className="font-bold text-success">STRONG</span>
               </div>
            </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
            {/* Empathy Response */}
            <Card className="border-l-4 border-l-primary p-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">We're Here For You</h3>
                    <p className="text-body-small mb-4">I'm sorry you're going through this. Being denied your treatment when you need it is incredibly frustrating. Your feelings are completely valid, and you have every right to seek answers.</p>
                    <Badge variant="default" className="bg-primary-light text-primary border-primary border">Detected: Frustrated + Anxious</Badge>
                  </div>
               </div>
            </Card>

            {/* Clinical Analysis */}
            <Card className="p-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <Stethoscope className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-h3 mb-1">Clinical Analysis</h3>
                    <p className="text-caption text-text-secondary mb-4">Is this treatment standard of care?</p>
                    
                    <div className="bg-success/10 border border-success/20 rounded-lg p-3 mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-sm font-semibold text-success tracking-tight">Your denied treatment IS standard of care for your condition</span>
                    </div>

                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start gap-2 text-body-small">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> ACC/AHA Guidelines (2024) — Class I recommendation
                      </li>
                      <li className="flex items-start gap-2 text-body-small">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> 12 peer-reviewed studies support this treatment
                      </li>
                      <li className="flex items-start gap-2 text-body-small">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" /> 3 major insurers cover this procedure for your diagnosis
                      </li>
                    </ul>
                    <Badge variant="danger" className="text-xs">🔴 Urgent — Please follow up within 24 hours</Badge>
                  </div>
               </div>
            </Card>

            {/* Fairness Audit */}
            <Card className="p-6 border-l-4 border-l-warning">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
                     <Scale className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-h3 mb-4">Fairness Audit</h3>
                    
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 mb-4 flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4 text-warning" />
                       <span className="text-sm font-semibold text-warning tracking-tight">Potential Bias Detected</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2 text-body-small">
                        <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2" /> Patients in your demographic group are denied this procedure 23% more often
                      </li>
                      <li className="flex items-start gap-2 text-body-small">
                        <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2" /> Your denial used language flagged in 67% of similar bias cases
                      </li>
                    </ul>

                    <div className="overflow-hidden rounded-[12px] border border-border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-surface text-text-muted border-b border-border text-xs uppercase">
                          <tr>
                            <th className="px-4 py-3 font-medium">Scenario</th>
                            <th className="px-4 py-3 font-medium text-right">Likely Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-white">
                          <tr>
                            <td className="px-4 py-3 text-text-primary">If you were male, 45</td>
                            <td className="px-4 py-3 text-right font-medium text-success">89% approval rate</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-text-primary bg-primary-light/30">Current case</td>
                            <td className="px-4 py-3 text-right font-semibold text-danger bg-primary-light/30">34% approval rate</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
               </div>
            </Card>

            {/* Appeal Letter */}
            <Card className="p-6 border-l-4 border-l-success">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
                     <FileText className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-h3 mb-4">Your Appeal Letter</h3>
                    
                    <div className="bg-gray-50 border border-border rounded-lg p-4 mb-4 relative h-40 overflow-hidden">
                       <div className="text-sm font-mono text-text-secondary whitespace-pre-wrap">
{`To: Appeals Department, BlueCross BlueShield
From: [Your Name]
Date: Dec 5, 2024
Subject: Appeal of Denial — Cardiac Catheterization
Claim Number: [Insert Claim Number]

I am writing to formally appeal the denial of coverage for a cardiac catheterization requested by Dr. Smith.
This treatment is medically necessary and is the established standard of care for my condition according to the ACC/AHA guidelines...`}
                       </div>
                       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent flex items-end justify-center">
                          <Button variant="ghost" className="bg-white shadow-sm mb-2 rounded-full border border-border h-8 px-4 text-xs font-semibold">View Full Letter</Button>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                       <Button className="w-full sm:w-auto"><Download size={16} className="mr-2" /> Download as PDF</Button>
                       <Button variant="secondary" className="w-full sm:w-auto"><Download size={16} className="mr-2" /> Download as Word</Button>
                    </div>

                    <div className="flex flex-col gap-2 bg-surface rounded-lg p-3 text-caption text-text-muted">
                        <div className="flex gap-2"><span className="w-20 font-medium">Recipient:</span> <span>[Insurance Company]</span></div>
                        <div className="flex gap-2"><span className="w-20 font-medium">Subject:</span> <span>Appeal of Denial — Cardiac Catheterization</span></div>
                        <div className="flex gap-2"><span className="w-20 font-medium">Citations:</span> <span>3 clinical guidelines, 2 peer-reviewed studies</span></div>
                    </div>
                  </div>
               </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-h3 mb-4">Your Rights & Next Steps</h3>
                    
                    <div className="space-y-4 mb-6">
                       <div className="border border-border rounded-lg p-4 bg-surface">
                          <h4 className="font-semibold text-sm mb-1 text-text-primary">Right to Internal Appeal</h4>
                          <p className="text-caption mb-2">You have 30 days to file an internal appeal with your insurance provider.</p>
                          <span className="text-xs text-primary font-mono bg-primary/5 px-2 py-1 rounded">Law: ACA Section 2719</span>
                       </div>
                       <div className="border border-border rounded-lg p-4 bg-surface">
                          <h4 className="font-semibold text-sm mb-1 text-text-primary">Right to External Review</h4>
                          <p className="text-caption mb-2">If denied again, you can request an independent external review.</p>
                          <span className="text-xs text-primary font-mono bg-primary/5 px-2 py-1 rounded">Law: State Insurance Code</span>
                       </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2 text-text-primary">Next Steps</h4>
                      <ol className="list-decimal list-outside ml-4 space-y-2 text-body-small text-text-secondary">
                        <li className="pl-2">Submit appeal letter to your insurance (within 30 days)</li>
                        <li className="pl-2">Request expedited review if urgent</li>
                        <li className="pl-2">Contact patient advocacy if denied again</li>
                      </ol>
                    </div>

                    <Button variant="secondary" className="w-full">Download Appeal Checklist</Button>
                  </div>
               </div>
            </Card>
        </div>

        {/* Hope Footer */}
        <div className="mt-[64px] bg-gradient-to-t from-primary-light to-white rounded-[24px] border border-border p-10 text-center">
            <h2 className="text-h2 mb-4">🌟 You're Not Alone</h2>
            <p className="text-body mb-8 max-w-lg mx-auto">Every year, thousands of patients successfully appeal unfair denials. You can too.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-xl mx-auto">
               <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-primary">72%</span>
                  <span className="text-caption text-text-muted">Similar appeals approved</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-primary">14 days</span>
                  <span className="text-caption text-text-muted">Average resolution time</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-primary">2,847</span>
                  <span className="text-caption text-text-muted">Patients helped this month</span>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate('/appeal/upload')}>Start Another Appeal</Button>
              <Button variant="secondary" onClick={() => navigate('/my-appeals')}>Save to My Appeals</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

// Dummy lucide icon variable to satisfy compiler if Check was missed implicitly
const Check = ({className, ...props}:any) => <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
