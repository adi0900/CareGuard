import React from 'react';
import { Card, Button, Input, Textarea } from '../components/ui';
import { Mail, Phone, Lock } from 'lucide-react';

export default function ContactScreen() {
  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[1000px] mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-h1 mb-2">Contact Support</h1>
          <p className="text-body text-lg text-text-secondary">We're here to help. Reach out for technical support or general questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           {/* Form - Left Column */}
           <div className="md:col-span-7">
              <Card className="p-8">
                 <h2 className="text-h2 mb-6">Send us a message</h2>
                 <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-semibold text-text-primary">Name</label>
                       <Input placeholder="Your full name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-semibold text-text-primary">Email</label>
                       <Input type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-semibold text-text-primary">Topic</label>
                       <select className="flex w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
                          <option>Technical Issue</option>
                          <option>Question About My Appeal</option>
                          <option>General Feedback</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-sm font-semibold text-text-primary">Message</label>
                       <Textarea placeholder="How can we help?" minLength={20} required className="min-h-[120px]" />
                    </div>
                    <Button type="button" className="mt-2 text-md py-4">Send Message</Button>
                 </form>
              </Card>
           </div>

           {/* Info - Right Column */}
           <div className="md:col-span-5 flex flex-col gap-4">
              <Card className="p-6 flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="text-h3 mb-1">Email Us</h3>
                    <p className="text-body-small font-semibold text-primary mb-1">support@careguard.ai</p>
                    <p className="text-caption text-text-muted">Response within 24 hours</p>
                 </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-l-4 border-l-danger">
                 <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
                    <Phone className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="text-h3 mb-2">Emergency?</h3>
                    <p className="text-body-small">If you're experiencing a medical emergency, call 911 or visit your nearest ER.</p>
                 </div>
              </Card>

              <Card className="p-6 flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-primary shrink-0">
                    <Lock className="w-5 h-5" />
                 </div>
                 <div>
                    <h3 className="text-h3 mb-2">Privacy Promise</h3>
                    <p className="text-body-small">We never store your medical data. All analysis happens securely.</p>
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
