import React, { useState } from 'react';
import DetailHero from '../components/detail-lowongan/DetailHero';
import DetailContent from '../components/detail-lowongan/DetailContent';
import DetailSidebar from '../components/detail-lowongan/DetailSidebar';
import DetailFaq from '../components/detail-lowongan/DetailFaq';
import DetailShareModal from '../components/detail-lowongan/DetailShareModal';

export default function DetailLowonganPage() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <DetailHero onOpenShareModal={() => setIsShareModalOpen(true)} />

      {/* Two-Column Editorial Main Body */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <DetailContent />
            <DetailSidebar />
          </div>
        </div>
      </section>

      <DetailFaq />

      <DetailShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
