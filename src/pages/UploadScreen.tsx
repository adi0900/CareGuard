import React, { useState } from 'react';
import { Card, Button, Stepper, EmpathyBanner, Textarea, cn } from '../components/ui';
import { UploadCloud, ArrowRight, File as FileIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UploadScreen() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile: File) => {
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File too large. Max 10MB.");
      setFile(null);
    } else {
      setError(null);
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-h1 mb-2">Start Your Appeal</h1>
          <p className="text-body text-text-secondary">Upload your denial letter to let our AI assist you.</p>
        </div>

        <Stepper currentStep={1} />
        
        <div className="mb-8">
           <EmpathyBanner />
        </div>

        {/* Upload Zone */}
        <div 
          className={cn(
             "w-full rounded-[24px] border-2 border-dashed p-8 md:p-16 text-center transition-colors relative bg-[#FAFBFC] mb-8",
             dragActive ? "border-primary bg-primary-light" : "border-border-dashed",
             error && "border-danger bg-danger/5"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                 <FileIcon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-body font-semibold text-text-primary">{file.name}</p>
              <p className="text-caption">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <button onClick={() => setFile(null)} className="text-sm text-primary hover:underline font-semibold mt-2 flex items-center gap-1">
                 <X size={16} /> Change File
              </button>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                 <UploadCloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-h3 mb-2">Upload Denial Letter (PDF/Image)</h3>
              <p className="text-body-small text-text-secondary mb-6">Drag and drop your file here, or click to browse.</p>
              <div>
                <Button type="button" variant="secondary" onClick={() => document.getElementById('file-upload')?.click()}>
                  Select File
                </Button>
                <input id="file-upload" type="file" className="hidden" accept=".pdf,image/*" onChange={handleChange} />
              </div>
              {error && <p className="text-danger mt-4 text-sm font-medium">{error}</p>}
              {!error && <p className="text-caption mt-4">Maximum file size: 10MB</p>}
            </>
          )}
        </div>

        {/* Optional Story */}
        <Card className="mb-8">
           <div className="mb-4">
              <h3 className="text-h3">Tell us your story (Optional)</h3>
              <p className="text-body-small mt-1">Adding context helps our AI tailor your appeal more effectively.</p>
           </div>
           <Textarea placeholder="Describe what happened..." rows={4} className="resize-none" />
           <div className="text-right mt-2"><span className="text-caption">0/500</span></div>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-8">
           <Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
           <Button 
             disabled={!file} 
             onClick={() => navigate('/appeal/analyzing')}
             className="gap-2"
           >
             Start Analysis <ArrowRight size={18} />
           </Button>
        </div>
      </div>
    </div>
  );
}
