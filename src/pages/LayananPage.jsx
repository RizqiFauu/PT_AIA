import React from 'react';
import LayananHero from '../components/layanan/LayananHero';
import LayananDualGateway from '../components/layanan/LayananDualGateway';
import LayananCapabilityMetrics from '../components/layanan/LayananCapabilityMetrics';
import LayananPilarModul from '../components/layanan/LayananPilarModul';
import LayananProcessFlow from '../components/layanan/LayananProcessFlow';
import LayananFaq from '../components/layanan/LayananFaq';
import LayananCta from '../components/layanan/LayananCta';

export default function LayananPage() {
  return (
    <div className="flex flex-col w-full">
      <LayananHero />
      <LayananDualGateway />
      <LayananCapabilityMetrics />
      <LayananPilarModul />
      <LayananProcessFlow />
      <LayananFaq />
      <LayananCta />
    </div>
  );
}
