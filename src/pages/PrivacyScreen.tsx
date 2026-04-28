import React from 'react';
import { Card } from '../components/ui';

export default function PrivacyScreen() {
  return (
    <div className="flex flex-col flex-1 bg-background px-4 md:px-6 py-12 w-full">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-2">Privacy Policy</h1>
          <p className="text-body text-text-secondary">Last updated: December 2024</p>
        </div>

        <Card className="p-8 md:p-12 prose prose-stone max-w-none prose-headings:text-text-primary prose-a:text-primary">
          <h2 className="text-h2 mb-4 mt-0">Our Guarantee</h2>
          <p className="text-body mb-6">
            At CareGuard, we understand that healthcare information is deeply personal. Our system is built structurally to prevent the retention of your medical documents.
          </p>

          <h2 className="text-h2 mb-4 mt-8">We do not store your medical documents</h2>
          <p className="text-body mb-6">
            When you upload a denial letter, it is held in volatile memory solely for the duration of the analysis. Once the analysis is complete and your session ends, the document is permanently scrubbed.
          </p>

          <h2 className="text-h2 mb-4 mt-8">All analysis is processed in real-time</h2>
          <p className="text-body mb-6">
            Our AI analysis happens immediately. We do not place your documents in a queue or store them for later processing. If an analysis fails, all partial data is immediately deleted.
          </p>

          <h2 className="text-h2 mb-4 mt-8">We use encryption for all transmissions</h2>
          <p className="text-body mb-6">
            Data transmitted between your browser and our secure servers is encrypted using industry-standard TLS 1.3 encryption.
          </p>

          <h2 className="text-h2 mb-4 mt-8">You can delete your data at any time</h2>
          <p className="text-body mb-6">
            While we don't store your documents, we do retain the generated Appeal Letter and Analysis Summary in your "My Appeals" dashboard if you choose to save it. You can permanently delete these from your dashboard with one click.
          </p>

          <h2 className="text-h2 mb-4 mt-8">We never share your information with third parties</h2>
          <p className="text-body mb-6">
            We will never sell, rent, or trade your personal information or medical data to any insurer, data broker, or marketing agency. We work exclusively for you.
          </p>
        </Card>
      </div>
    </div>
  );
}
