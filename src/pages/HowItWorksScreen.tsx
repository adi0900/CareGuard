import React from 'react';
import { Button } from '../components/ui';
import { UploadCloud, CheckCircle2, ShieldCheck, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorksScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* Hero */}
      <section className="px-6 py-[64px] text-center w-full max-w-[800px] mx-auto">
        <h1 className="text-h1 mb-4">How CareGuard Works</h1>
        <p className="text-body text-xl">From denial to appeal in 3 simple steps.</p>
      </section>

      {/* Step 1 */}
      <section className="bg-surface py-16 md:py-24 px-6 border-y border-border w-full">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Mockup */}
            <div className="order-2 md:order-1 bg-background rounded-[24px] p-6 sm:p-8 border border-border shadow-sm flex items-center justify-center">
                <div className="w-full max-w-[320px] bg-surface rounded-[16px] shadow-lg border border-border overflow-hidden">
                   <div className="p-4 border-b border-border font-semibold text-center text-sm">Upload File</div>
                   <div className="p-6">
                      <div className="border-2 border-dashed border-border-dashed rounded-[12px] h-[160px] flex flex-col items-center justify-center bg-gray-50 text-primary">
                         <UploadCloud size={32} className="mb-2"/>
                         <span className="text-xs font-semibold">Drop PDF here</span>
                      </div>
                      <div className="mt-4 h-8 bg-primary rounded-[8px] w-full" />
                   </div>
                </div>
            </div>
            {/* Right: Content */}
            <div className="order-1 md:order-2">
               <div className="text-primary text-[48px] font-bold leading-none mb-4 opacity-20">01</div>
               <h2 className="text-h2 mb-4">Upload Your Denial Letter</h2>
               <p className="text-body mb-6 text-lg">
                 Take a photo or upload a PDF of your healthcare denial letter. You can also describe your situation in your own words.
               </p>
               <ul className="space-y-3 font-medium text-text-primary text-lg">
                  <li className="flex items-center gap-3"><span className="text-2xl">📎</span> Supports PDF, JPG, PNG</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">📱</span> Works on any device</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">🔒</span> Secure upload</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Step 2 */}
      <section className="bg-background py-16 md:py-24 px-6 w-full">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
               <div className="text-primary text-[48px] font-bold leading-none mb-4 opacity-20">02</div>
               <h2 className="text-h2 mb-4">AI Analysis in 60 Seconds</h2>
               <p className="text-body mb-6 text-lg">
                 Our AI reads your letter, checks clinical guidelines, detects bias patterns, and understands your emotions.
               </p>
               <ul className="space-y-3 font-medium text-text-primary text-lg">
                  <li className="flex items-center gap-3"><span className="text-2xl">🧠</span> Emotional intelligence</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">📊</span> Clinical guideline check</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">⚖️</span> Bias detection</li>
               </ul>
            </div>
            {/* Right: Mockup */}
            <div className="bg-surface rounded-[24px] p-6 sm:p-8 border border-border shadow-sm flex items-center justify-center">
                <div className="w-full max-w-[320px] bg-surface rounded-[16px] shadow-lg border border-border overflow-hidden">
                   <div className="p-4 border-b border-border font-semibold text-center text-sm">Analyzing...</div>
                   <div className="p-8 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border-[4px] border-border border-t-primary animate-spin mb-6" />
                      <div className="w-full space-y-3">
                         <div className="h-2 w-full bg-success/20 rounded-full" />
                         <div className="h-2 w-[80%] bg-success/20 rounded-full" />
                         <div className="h-2 w-[60%] border border-border rounded-full" />
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* Step 3 */}
      <section className="bg-surface py-16 md:py-24 px-6 border-y border-border w-full">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Mockup */}
            <div className="order-2 md:order-1 bg-background rounded-[24px] p-6 sm:p-8 border border-border shadow-sm flex items-center justify-center">
                <div className="w-full max-w-[320px] bg-surface rounded-[16px] shadow-lg border border-border overflow-hidden">
                   <div className="p-4 border-b border-border font-semibold text-center text-sm flex items-center justify-center gap-2">
                      <ShieldCheck size={16} className="text-success" /> Appeal Ready
                   </div>
                   <div className="p-4">
                      <div className="bg-gray-50 border border-border rounded p-3 mb-4 space-y-2">
                        <div className="w-[40%] h-2 bg-gray-300 rounded" />
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-[80%] h-2 bg-gray-200 rounded" />
                      </div>
                      <div className="h-8 bg-primary rounded-[8px] w-full" />
                   </div>
                </div>
            </div>
            {/* Right: Content */}
            <div className="order-1 md:order-2">
               <div className="text-primary text-[48px] font-bold leading-none mb-4 opacity-20">03</div>
               <h2 className="text-h2 mb-4">Get Your Appeal Letter</h2>
               <p className="text-body mb-6 text-lg">
                 Review the analysis, download your personalized appeal letter, and learn your rights. All ready to send.
               </p>
               <ul className="space-y-3 font-medium text-text-primary text-lg">
                  <li className="flex items-center gap-3"><span className="text-2xl">📄</span> Ready-to-send letter</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">📋</span> Your rights explained</li>
                  <li className="flex items-center gap-3"><span className="text-2xl">🎯</span> Clear next steps</li>
               </ul>
            </div>
         </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-background py-16 md:py-24 px-6 max-w-[800px] mx-auto w-full">
         <h2 className="text-h2 mb-8 text-center">Frequently Asked Questions</h2>
         <div className="space-y-4">
            {[
              { q: "Do I need a lawyer?", a: "No. CareGuard generates a letter based on clinical guidelines that you can submit directly to your insurance company. However, for complex or final-stage appeals, consulting a patient advocate or attorney is recommended." },
              { q: "How much does it cost?", a: "CareGuard is completely free for patients to use." },
              { q: "What if it doesn't work?", a: "If your internal appeal is denied, you typically have the right to request an independent external review. CareGuard's analysis provides the groundwork for both." }
            ].map((faq, i) => (
              <div key={i} className="bg-surface border border-border rounded-[12px] p-6 hover:shadow-sm transition-shadow">
                 <h3 className="text-h3 mb-2">{faq.q}</h3>
                 <p className="text-body text-text-secondary">{faq.a}</p>
              </div>
            ))}
         </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-16 md:pb-24 w-full">
         <div className="max-w-[1200px] mx-auto bg-gradient-to-r from-primary-light to-white rounded-[24px] border border-border p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-h2 md:text-h1 mb-8">Ready to Start Your Appeal?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="w-full sm:w-auto px-8" onClick={() => navigate('/appeal/upload')}>Start Your Appeal</Button>
               <Button variant="secondary" size="lg" className="bg-white w-full sm:w-auto px-8"><PlayCircle className="mr-2 w-5 h-5"/> Watch Demo Video</Button>
            </div>
         </div>
      </section>
    </div>
  );
}
