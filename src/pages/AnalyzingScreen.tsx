import React, { useEffect, useState } from 'react';
import { Stepper, Button } from '../components/ui';
import { useNavigate } from 'react-router-dom';
import { Check, Loader2 } from 'lucide-react';

const quotes = [
  "You're stronger than you know. We're here to help you fight this.",
  "Every appeal starts with understanding. We're building yours now.",
  "Fairness in healthcare is your right. We're making sure you get it."
];

export default function AnalyzingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const steps = [
    { label: "Reading your letter", at: 0 },
    { label: "Detecting your emotions", at: 20 },
    { label: "Analyzing clinical guidelines", at: 40 },
    { label: "Checking for bias patterns", at: 70 },
    { label: "Generating your appeal", at: 90 },
  ];

  useEffect(() => {
    // Navigate automatically to review when done
    if (progress >= 100) {
      setTimeout(() => navigate('/appeal/review'), 500);
      return;
    }
    const timer = setInterval(() => {
      setProgress(p => Math.min(p + (Math.random() * 5 + 2), 100)); // complete in approx 10-15s for demo
    }, 500);
    return () => clearInterval(timer);
  }, [progress, navigate]);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex(curr => (curr + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(quoteTimer);
  }, []);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[800px] mx-auto w-full text-center">
        <h1 className="text-h1 mb-2">Analyzing Your Appeal</h1>
        <p className="text-body">Our AI is reviewing your denial letter with care. This usually takes 30-60 seconds.</p>
        
        <Stepper currentStep={2} />

        <div className="flex flex-col items-center mt-12 mb-16">
           <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-8">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle 
                  cx="60" cy="60" r={radius} 
                  stroke="var(--color-surface)" strokeWidth="8" fill="none" 
                  className="shadow-sm" 
                />
                <circle 
                  cx="60" cy="60" r={radius} 
                  stroke="var(--color-primary)" strokeWidth="8" fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 ease-in-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-xl font-bold text-primary">{Math.round(progress)}%</div>
           </div>

           <div className="w-full max-w-[500px] flex flex-col gap-4 text-left">
              {steps.map((step, i) => {
                const isCompleted = progress >= (steps[i+1]?.at || 100);
                const isActive = progress >= step.at && !isCompleted;
                const isWaiting = progress < step.at;

                return (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                     <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-success/10 text-success' : isActive ? 'bg-primary-light text-primary' : 'bg-gray-100 text-text-muted'}`}>
                           {isCompleted ? <Check size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                        </div>
                        <span className={`text-body-small font-medium ${isActive ? 'text-primary' : isCompleted ? 'text-text-primary' : 'text-text-muted'}`}>
                           {step.label}
                        </span>
                     </div>
                     <div>
                       {isActive && <Loader2 size={18} className="animate-spin text-primary" />}
                       {isCompleted && <Check size={18} className="text-success" />}
                     </div>
                  </div>
                )
              })}
           </div>
        </div>

        <div className="w-full max-w-[500px] mx-auto bg-primary-light p-6 rounded-[16px] mb-12 h-[100px] flex items-center justify-center relative overflow-hidden">
           <div key={quoteIndex} className="animate-in fade-in zoom-in duration-500 absolute w-full px-6 flex items-start gap-4">
               <div className="text-primary mt-1">"</div>
               <p className="text-body-small text-primary font-medium italic">
                 {quotes[quoteIndex]}
               </p>
           </div>
        </div>

        <Button variant="ghost" onClick={() => navigate('/')}>Cancel Analysis</Button>
      </div>
    </div>
  );
}
