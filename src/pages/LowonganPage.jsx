import React, { useState } from 'react';
import LowonganHero from '../components/lowongan/LowonganHero';
import LowonganFilter from '../components/lowongan/LowonganFilter';
import LowonganGrid from '../components/lowongan/LowonganGrid';
import LowonganInquiryForm from '../components/lowongan/LowonganInquiryForm';
import LowonganPilarPerlindungan from '../components/lowongan/LowonganPilarPerlindungan';

export default function LowonganPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [zeroCostOnly, setZeroCostOnly] = useState(false);

  const handleApply = () => {
    // Already controlled via state
  };

  return (
    <div className="flex flex-col w-full">
      <LowonganHero />
      <LowonganFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        zeroCostOnly={zeroCostOnly}
        setZeroCostOnly={setZeroCostOnly}
        onApply={handleApply}
      />
      <LowonganGrid
        searchQuery={searchQuery}
        selectedCountry={selectedCountry}
        selectedSector={selectedSector}
        zeroCostOnly={zeroCostOnly}
      />
      <LowonganInquiryForm />
      <LowonganPilarPerlindungan />
    </div>
  );
}
