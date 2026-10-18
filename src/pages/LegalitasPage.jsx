import React from 'react';
import LegalitasHero from '../components/legalitas/LegalitasHero';
import LegalitasStatusBanner from '../components/legalitas/LegalitasStatusBanner';
import LegalitasPerizinanGrid from '../components/legalitas/LegalitasPerizinanGrid';
import LegalitasCompliance from '../components/legalitas/LegalitasCompliance';
import LegalitasPortalVerifikasi from '../components/legalitas/LegalitasPortalVerifikasi';
import LegalitasCta from '../components/legalitas/LegalitasCta';

export default function LegalitasPage() {
  return (
    <div className="flex flex-col w-full">
      <LegalitasHero />
      <LegalitasStatusBanner />
      <LegalitasPerizinanGrid />
      <LegalitasCompliance />
      <LegalitasPortalVerifikasi />
      <LegalitasCta />
    </div>
  );
}
