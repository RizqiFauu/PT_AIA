import React from 'react';
import NegaraHero from '../components/negara/NegaraHero';
import NegaraGrid from '../components/negara/NegaraGrid';
import NegaraTahapanPenempatan from '../components/negara/NegaraTahapanPenempatan';
import NegaraComplianceInsight from '../components/negara/NegaraComplianceInsight';
import NegaraFaq from '../components/negara/NegaraFaq';
import NegaraCta from '../components/negara/NegaraCta';

export default function NegaraTujuanPage() {
  return (
    <div className="flex flex-col w-full">
      <NegaraHero />
      <NegaraGrid />
      <NegaraTahapanPenempatan />
      <NegaraComplianceInsight />
      <NegaraFaq />
      <NegaraCta />
    </div>
  );
}
