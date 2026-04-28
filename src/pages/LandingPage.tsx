import React from 'react';
import { Card, Button, Badge } from '../components/ui';
import { Shield, Sparkles, FileText, ArrowRight, Activity, AlertTriangle, AlertCircle, UploadCloud, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent w-full">
      {/* Hero Section */}
      <section className="w-full px-6 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            <h1 className="text-h1 text-text-primary">
              When Healthcare Says No, <span className="text-primary block">CareGuard Says Yes</span>
            </h1>
            <p className="text-body text-lg max-w-2xl">
              Every year, 2.3 million patients face biased healthcare denials. Most don't know they can appeal. CareGuard analyzes your denial, detects bias, and generates an evidence-backed appeal letter — in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link to="/appeal/upload" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">Start Your Appeal</Button>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto">
                 <Button size="lg" variant="secondary" className="w-full">See How It Works</Button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full max-w-[500px] mx-auto lg:max-w-none">
            <div className="bg-primary-light rounded-[24px] aspect-square w-full p-6 sm:p-8 relative flex items-center justify-center border border-border/50">
               <div className="absolute top-4 -left-4 sm:top-8 sm:-left-8 bg-surface shadow-card p-3 sm:p-4 rounded-[16px] flex flex-col gap-1 items-start text-xs sm:text-sm font-semibold text-text-primary z-10 border border-border">
                  <span className="text-primary text-xl sm:text-2xl font-bold">72%</span>
                  Appeal Success Rate
               </div>
               <div className="absolute bottom-8 -right-4 sm:bottom-12 sm:-right-8 bg-surface shadow-card p-3 sm:p-4 rounded-[16px] flex flex-col gap-1 items-start text-xs sm:text-sm font-semibold text-text-primary z-10 border border-border">
                  <span className="text-primary text-xl sm:text-2xl font-bold">2.3M+</span>
                  Denials Analyzed
               </div>
               
               {/* Mock Illustration Box */}
               <div className="w-full h-full bg-surface rounded-[20px] shadow-lg border border-border overflow-hidden flex flex-col relative">
                  <div className="bg-primary/5 h-12 w-full border-b border-border flex items-center px-4 shrink-0">
                    <div className="w-2/3 h-4 bg-primary/20 rounded-full" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-4 relative">
                     <div className="w-full h-[30%] bg-gray-100 rounded-lg" />
                     <div className="w-full h-[25%] bg-gray-100 rounded-lg" />
                     <div className="flex gap-2">
                       <div className="w-1/2 h-8 bg-primary rounded-lg" />
                       <div className="w-1/2 h-8 bg-gray-200 rounded-lg" />
                     </div>
                     <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-success absolute bottom-4 right-4 sm:bottom-6 sm:right-6 drop-shadow-md" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="w-full bg-surface border-y border-border py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           <span className="text-text-muted font-semibold text-sm uppercase tracking-wider text-center md:text-left">Featured Approach</span>
           <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center text-text-muted font-bold opacity-60">
             <span>Google AI</span>
             <span>Gemma 4</span>
             <span className="text-center">Patient Advocacy Partners</span>
           </div>
           <span className="text-text-muted text-sm italic mt-2 md:mt-0 text-center md:text-left">Built with privacy. Powered by empathy.</span>
        </div>
      </div>

      {/* Problem Section */}
      <section className="w-full bg-background px-6 py-16 md:py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto w-full">
         <h2 className="text-h2 mb-12 text-center text-text-primary">Healthcare Bias is Real</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <Card className="flex flex-col gap-4 p-6 sm:p-8 hover:-translate-y-1 transition-transform">
               <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
                  <AlertTriangle className="w-7 h-7" />
               </div>
               <div className="text-[32px] font-bold text-warning leading-tight">40% Less</div>
               <p className="text-body text-text-secondary leading-relaxed">Pain management for Black patients with identical conditions</p>
            </Card>
            <Card className="flex flex-col gap-4 p-6 sm:p-8 hover:-translate-y-1 transition-transform">
               <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
                  <AlertCircle className="w-7 h-7" />
               </div>
               <div className="text-[32px] font-bold text-warning leading-tight">2x Denial</div>
               <p className="text-body text-text-secondary leading-relaxed">Mental health claims face double the denial rate of physical health</p>
            </Card>
            <Card className="flex flex-col gap-4 p-6 sm:p-8 hover:-translate-y-1 transition-transform">
               <div className="w-14 h-14 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
                  <Activity className="w-7 h-7" />
               </div>
               <div className="text-[32px] font-bold text-danger leading-tight">72% Ignore</div>
               <p className="text-body text-text-secondary leading-relaxed">Of patients who receive denials never challenge them</p>
            </Card>
         </div>
         <div className="max-w-3xl mx-auto bg-surface p-8 sm:p-10 border-l-4 border-primary shadow-sm rounded-r-[16px] border-y border-r border-y-border border-r-border text-center relative">
           <Heart className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
           <p className="italic text-text-secondary text-lg sm:text-xl leading-relaxed">
             "They denied my cardiac catheterization. I'm scared. What if it's not about my health at all?"
           </p>
           <div className="not-italic font-semibold text-text-primary text-sm sm:text-base mt-6">— Anonymous Patient</div>
         </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full bg-surface px-6 py-16 md:py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto w-full">
           <h2 className="text-h2 mb-16 text-center text-text-primary">How CareGuard Works</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 px-4">
              {[
                { icon: UploadCloud, title: "Upload Denial", desc: "PDF, image, or describe your situation safely" },
                { icon: Heart, title: "Feel Understood", desc: "Our AI validates your feelings before analyzing" },
                { icon: Activity, title: "See the Bias", desc: "Clinical analysis & fairness audit with evidence" },
                { icon: FileText, title: "Get Your Appeal", desc: "Ready-to-send letter with exact medical citations" }
              ].map((step, i) => (
                 <div key={i} className="flex flex-col items-center text-center relative group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-light flex items-center justify-center text-primary mb-6 z-10 box-content border-[6px] border-surface shadow-sm group-hover:scale-105 transition-transform duration-300">
                       <step.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    {/* Visual Connector for Desktop */}
                    {i < 3 && <div className="hidden lg:block absolute top-[44px] left-[60%] w-[80%] h-[3px] bg-primary-light z-0" />}
                    <h3 className="text-h3 text-text-primary mb-3">{step.title}</h3>
                    <p className="text-body-small text-text-secondary max-w-[220px] mx-auto leading-relaxed">{step.desc}</p>
                 </div>
              ))}
           </div>
           <div className="flex justify-center">
             <Link to="/appeal/upload" className="w-full sm:w-auto">
               <Button size="lg" className="w-full px-12">Start Your Appeal Now</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-background">
        <div className="px-6 py-16 md:py-24 max-w-[1200px] mx-auto w-full">
         <h2 className="text-h2 mb-12 text-center text-text-primary">You're Not Alone</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { quote: "CareGuard detected bias in my maternity denial. My appeal was approved in 10 days.", name: "Sarah, 28" },
              { quote: "I didn't know I had rights. The appeal letter was ready to send immediately.", name: "Michael, 34" },
              { quote: "For the first time, I felt like someone was actually on my side.", name: "Linda, 56" }
            ].map((t, idx) => (
               <Card key={idx} className="flex flex-col gap-6 justify-between p-8 hover:-translate-y-1 transition-transform bg-surface border border-border">
                  <p className="text-body text-text-primary italic leading-relaxed text-lg">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold">
                      {t.name[0]}
                    </div>
                    <p className="text-body-small font-semibold text-text-primary">{t.name}</p>
                  </div>
               </Card>
            ))}
         </div>
        </div>
      </section>
    </div>
  );
}
