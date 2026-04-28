import React from 'react';
import { Button, Card, Badge } from '../components/ui';
import { Inbox, FileText, CheckCircle2, Clock, AlertCircle, ArrowRight, Download, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function MyAppealsScreen() {
  const navigate = useNavigate();

  // Mock appeals
  const appeals = [
    { id: '001', title: 'Cardiac Catheterization Denial', date: 'Dec 5, 2024', status: 'Under Review', statusType: 'warning' },
    { id: '002', title: 'Physical Therapy Extension', date: 'Nov 12, 2024', status: 'Approved', statusType: 'success' },
    { id: '003', title: 'MRI Pre-authorization', date: 'Oct 03, 2024', status: 'Denied - See Steps', statusType: 'danger' }
  ];

  return (
    <div className="flex flex-col flex-1 bg-background px-6 py-12 md:py-16 w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div>
              <h1 className="text-h1 mb-2">My Appeals</h1>
              <p className="text-body text-text-secondary">Track and manage your healthcare appeals.</p>
           </div>
           <Button onClick={() => navigate('/appeal/upload')}>+ New Appeal</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
           <Card className="p-6 flex items-center justify-between">
              <div>
                 <p className="text-caption text-text-muted mb-1 uppercase">Total Appeals</p>
                 <p className="text-2xl font-bold">{appeals.length}</p>
              </div>
              <FileText className="w-8 h-8 text-primary opacity-20" />
           </Card>
           <Card className="p-6 flex items-center justify-between">
              <div>
                 <p className="text-caption text-text-muted mb-1 uppercase">In Progress</p>
                 <p className="text-2xl font-bold">1</p>
              </div>
              <Clock className="w-8 h-8 text-warning opacity-20" />
           </Card>
           <Card className="p-6 flex items-center justify-between">
              <div>
                 <p className="text-caption text-text-muted mb-1 uppercase">Approved</p>
                 <p className="text-2xl font-bold">1</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-success opacity-20" />
           </Card>
           <Card className="p-6 flex items-center justify-between">
              <div>
                 <p className="text-caption text-text-muted mb-1 uppercase">Pending</p>
                 <p className="text-2xl font-bold">1</p>
              </div>
              <AlertCircle className="w-8 h-8 text-text-muted opacity-20" />
           </Card>
        </div>

        {/* Appeals List */}
        <div className="flex flex-col gap-4">
           {appeals.map((appeal) => (
             <Card key={appeal.id} className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="shrink-0 hidden md:block">
                  {appeal.statusType === 'success' && <CheckCircle2 className="w-8 h-8 text-success" />}
                  {appeal.statusType === 'warning' && <Clock className="w-8 h-8 text-warning" />}
                  {appeal.statusType === 'danger' && <AlertCircle className="w-8 h-8 text-danger" />}
                </div>
                <div className="flex-1">
                   <h3 className="text-h3 mb-2 flex items-center gap-2">
                     Appeal #{appeal.id} — {appeal.title}
                   </h3>
                   <div className="flex flex-wrap items-center gap-3 text-caption text-text-secondary mb-3">
                     <span>Submitted: {appeal.date}</span>
                     <span className="w-1 h-1 rounded-full bg-border" />
                     <Badge variant={appeal.statusType as any}>{appeal.status}</Badge>
                   </div>
                   <p className="text-body-small italic text-text-muted">Appeal letter sent to insurance provider...</p>
                </div>
                <div className="flex items-center gap-3 md:border-l md:border-border md:pl-6 shrink-0 mt-4 md:mt-0">
                   <Link to={`/my-appeals/${appeal.id}`}>
                     <Button variant="ghost" className="h-10 px-4 text-primary font-semibold hidden md:flex items-center gap-2">
                       View <ArrowRight size={16} />
                     </Button>
                   </Link>
                   <Button variant="secondary" size="sm" className="w-10 px-0 md:w-auto md:px-4"><Eye size={18} className="md:mr-2" /><span className="hidden md:inline">View</span></Button>
                   <Button variant="secondary" size="sm" className="w-10 px-0 md:w-auto md:px-4"><Download size={18} className="md:mr-2" /><span className="hidden md:inline">Letter</span></Button>
                </div>
             </Card>
           ))}

           {appeals.length === 0 && (
             <div className="text-center py-24 bg-surface rounded-[24px] border border-border">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                   <Inbox className="w-10 h-10" />
                </div>
                <h3 className="text-h3 mb-2">No Appeals Yet</h3>
                <p className="text-body text-text-secondary mb-6">Start your first appeal to see it here.</p>
                <Button onClick={() => navigate('/appeal/upload')}>Start Your First Appeal</Button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
