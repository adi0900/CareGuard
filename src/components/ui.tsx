import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Check, Heart, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[12px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === 'primary' && "bg-primary text-white hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]",
          variant === 'secondary' && "bg-transparent border border-border text-text-primary hover:bg-surface hover:border-primary",
          variant === 'ghost' && "bg-transparent text-text-secondary hover:text-text-primary underline hover:bg-transparent",
          size === 'sm' && "h-8 px-3 text-sm",
          size === 'md' && "h-11 px-6 text-[14px]",
          size === 'lg' && "h-14 px-8 text-[16px]",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Card
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("bg-surface border border-border rounded-[16px] shadow-card hover:shadow-card-hover transition-shadow duration-200", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Input
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Textarea
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm ring-offset-background placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

// Badge
export function Badge({ children, variant = 'default', className }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'danger', className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      variant === 'default' && "bg-gray-100 text-gray-800",
      variant === 'success' && "bg-green-100 text-success",
      variant === 'warning' && "bg-orange-100 text-warning",
      variant === 'danger' && "bg-red-100 text-danger",
      className
    )}>
      {children}
    </span>
  );
}

// Empathy Banner
export function EmpathyBanner({ title = "We're here to help.", body = "I'm sorry you're facing this. You're not alone. Our AI is analyzing your letter with care." }) {
  return (
    <div className="bg-primary-light border-l-4 border-l-primary rounded-r-[16px] rounded-l-[4px] p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start relative overflow-hidden">
      <div className="text-primary mt-1 z-10 shrink-0">
         <Shield className="w-6 h-6 absolute opacity-20 stroke-[3px]" />
         <Heart className="w-6 h-6 fill-current relative top-1 left-1" size={16} />
      </div>
      <div className="z-10">
        <h3 className="text-h3 text-primary mb-1">{title}</h3>
        <p className="text-body-small text-primary/80 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

// Stepper
interface StepperProps {
  currentStep: number;
}
export function Stepper({ currentStep }: StepperProps) {
  const steps = [
    { title: 'Upload', number: 1 },
    { title: 'Analyze', number: 2 },
    { title: 'Review', number: 3 },
  ];

  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto py-8 px-4">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.number;
        const isActive = currentStep === step.number;
        const isPending = currentStep < step.number;

        return (
          <React.Fragment key={step.title}>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                  isCompleted && "bg-success border-success text-white",
                  isActive && "bg-primary border-primary text-white",
                  isPending && "bg-transparent border-text-muted text-text-muted"
                )}
              >
                {isCompleted ? <Check size={20} className="stroke-[3px]" /> : <span className="font-semibold text-sm">{step.number}</span>}
              </div>
              <span
                className={cn(
                  "font-semibold text-sm tracking-wide hidden md:block",
                  (isCompleted) && "text-success",
                  isActive && "text-primary",
                  isPending && "text-text-muted font-medium"
                )}
              >
                {step.title}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-[2px] w-12 md:w-32 mx-2 md:mx-4 transition-colors shrink-0",
                  isCompleted ? "bg-success" : "bg-border"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
