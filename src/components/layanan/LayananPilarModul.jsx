import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LayananPilarModul() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 bg-surface" id="alur-layanan">
      <div className="max-w-[1280px] mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col max-w-3xl mb-16">
          <span className="font-label-eyebrow text-label-eyebrow text-on-tertiary-container uppercase tracking-widest font-bold mb-2">
            {t('layanan.pilarModul.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            {t('layanan.pilarModul.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            {t('layanan.pilarModul.desc')}
          </p>
        </div>
        <div className="space-y-12">
          {/* Module 1: Rekrutmen & Seleksi */}
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-primary-container text-tertiary-fixed-dim font-bold flex items-center justify-center font-headline-sm">
                  {t('layanan.pilarModul.m1Step')}
                </span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
                  {t('layanan.pilarModul.m1Badge')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
                {t('layanan.pilarModul.m1Title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.pilarModul.m1Desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m1Feature1Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m1Feature1Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m1Feature2Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m1Feature2Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m1Feature3Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m1Feature3Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m1Feature4Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m1Feature4Desc')}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-tertiary-container font-label-button text-label-button">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>{t('layanan.pilarModul.m1Tag')}</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img className="w-full h-80 lg:h-96 object-cover" data-alt="Professional boardroom meeting in modern high-rise office showing diverse executives, Indonesian specialists and international employers evaluating candidate portfolios, illuminated by natural morning sunlight with deep navy and warm wood tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb8lOBYg-bg-iWM8WYaABvKFU4SxkIOmTlw3PBLogcSTmG_YcUbUk4eeOPi57wOVyu5shFGyGM5qpgqAc6N9_SS-vBiFdMQNlHLO0vn511A3wOgm7YY_pueZnIFD885jtL_MT5RdrOlAhG3a539CeSr-7R30HKYQZcQze65lq8QLBqYOp5vkHUa4HUlUY8emXor-GqCHWr4dbQYvLXRt8H8otbqON1VklizYOLixAnkKKWr0PFtLefQg"/>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caption text-label-caption text-on-surface font-semibold">
                      {t('layanan.pilarModul.m1StatLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {t('layanan.pilarModul.m1StatVal')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Pemrosesan Dokumen & Visa */}
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-primary-container text-tertiary-fixed-dim font-bold flex items-center justify-center font-headline-sm">
                  {t('layanan.pilarModul.m2Step')}
                </span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
                  {t('layanan.pilarModul.m2Badge')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
                {t('layanan.pilarModul.m2Title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.pilarModul.m2Desc')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">health_and_safety</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m2Feature1Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m2Feature1Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">assignment_turned_in</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m2Feature2Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m2Feature2Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">shield</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m2Feature3Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m2Feature3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img className="w-full h-80 lg:h-96 object-cover" data-alt="Close up editorial shot of verified Indonesian passports, official work visa documentation stamped and notarized, neatly arranged alongside a pen and legal checklist in an executive corporate office setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB456vuzpWp0kIoOaVrA2xAjQjHxhSVlwhrw9G9XR5fpVMjPRuzQkafcN7Dq8ANG-fwjCyO6Y3SuRduF0KgNv4PU29mXLLlgc7blXBqNp_WFyZB0uEtnWEm0fMwkQGiXHXvkxfueadsfaAe3klCPmYSVFPES7WhzDdY8Ky0uLgnBxxn9DtKVB6bRLPcJaBkBEObSO-LeYovLYJhNOyqq9QZhNFcyZ7xtsD46XCQN0NYGMXJo9Cv-_0jLw"/>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caption text-label-caption text-on-surface font-semibold">
                      {t('layanan.pilarModul.m2StatLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {t('layanan.pilarModul.m2StatVal')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Pelatihan Bahasa & Budaya */}
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-primary-container text-tertiary-fixed-dim font-bold flex items-center justify-center font-headline-sm">
                  {t('layanan.pilarModul.m3Step')}
                </span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
                  {t('layanan.pilarModul.m3Badge')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
                {t('layanan.pilarModul.m3Title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.pilarModul.m3Desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m3Feature1Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m3Feature1Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m3Feature2Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m3Feature2Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m3Feature3Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m3Feature3Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m3Feature4Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m3Feature4Desc')}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img className="w-full h-80 lg:h-96 object-cover" data-alt="Modern language and technical training center showing disciplined Indonesian students attentively engaged in foreign language training with an instructor at digital whiteboards, warm educational ambiance with institutional blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMr_F5wvU5-bq0Qb6c9A-5fAAVeFa42KRAFUEORWF-vMiYtF2qLvqrmMeBmmzNiV7QdhQN3rymA05s2d4zS3Pr3P5hUiLxbEy9utXhCuZFV2SQmGv68laJHZGi5eALtyCWERbfVs0mbP-21vHFmVtAsfRThoZoK9G_VbYn-tUW1ZbO9OL7meoSjypoCjF47X4paMUm1_qQic3tbedfOiAOsBAiaAg1U1fDnMEC0J77i25FSR1JjpSug"/>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caption text-label-caption text-on-surface font-semibold">
                      {t('layanan.pilarModul.m3StatLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {t('layanan.pilarModul.m3StatVal')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4: Penempatan & Logistik */}
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-primary-container text-tertiary-fixed-dim font-bold flex items-center justify-center font-headline-sm">
                  {t('layanan.pilarModul.m4Step')}
                </span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
                  {t('layanan.pilarModul.m4Badge')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
                {t('layanan.pilarModul.m4Title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.pilarModul.m4Desc')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">connecting_airports</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m4Feature1Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m4Feature1Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">travel_explore</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m4Feature2Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m4Feature2Desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">contact_phone</span>
                  <div>
                    <h4 className="font-label-button text-label-button text-primary font-semibold">
                      {t('layanan.pilarModul.m4Feature3Title')}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {t('layanan.pilarModul.m4Feature3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img className="w-full h-80 lg:h-96 object-cover" data-alt="A clean international airport terminal setting showing a group of cheerful Indonesian technical interns and workers in matching company jackets with carry-on luggage, guided by a company officer holding travel documents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm7SB0O3ukmTiJwl0BByE1gGBpE3Wzt5aDwQgoAVGQzBGD2HbzWtSNNu3V0iuugHd0kAnCX3DxOcyLMPhBgkQmDfbz-2tzN9W4sSZj7dYgbzGIoh8Mka1wnOoxnygZ-ZyF5pFTjpSiKnCj2FKnczM_Bqvtkmy4buw7zbJK9E6P_kEjlaFedV76DFNsmcQDp7j1lVS5mVeettmgCQ7PQtLHBA90aC5BOrswFUlN22nD-tc0wxaFZhxmvA"/>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caption text-label-caption text-on-surface font-semibold">
                      {t('layanan.pilarModul.m4StatLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {t('layanan.pilarModul.m4StatVal')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 5: Pemantauan & Pendampingan */}
          <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-primary-container text-tertiary-fixed-dim font-bold flex items-center justify-center font-headline-sm">
                  {t('layanan.pilarModul.m5Step')}
                </span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest font-bold">
                  {t('layanan.pilarModul.m5Badge')}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
                {t('layanan.pilarModul.m5Title')}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('layanan.pilarModul.m5Desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m5Feature1Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m5Feature1Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m5Feature2Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m5Feature2Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m5Feature3Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m5Feature3Desc')}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg">
                  <span className="font-label-button text-label-button text-primary block font-semibold mb-1">
                    {t('layanan.pilarModul.m5Feature4Title')}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {t('layanan.pilarModul.m5Feature4Desc')}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img className="w-full h-80 lg:h-96 object-cover" data-alt="Comfortable overseas corporate liaison office showing a case officer conducting a supportive video check-in session with an Indonesian overseas worker, with official legal binders and diplomatic flag emblems in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI7_gnKyvdCaU2PqKA9cEzhN7kEy3zgA_a_yuSIjf7TH89l933nNDpkoEQQJRcri6jRrG-p7oftloOeM_HB6PP1T8du28aKSP3a2hTrvs2CiWGwn6dGFJUboJe4lIdIyqP8IzHbNN9cuaDGe44XpxEjcQ-Wg8obnBq--15fJSQNKsLdNnZFozdgoaMrOOej6_6Ctq25o6Suzy-v8ClCnzFeYyLTQyN_DRGfY6jBq8SOmytFUk0qQfAYg"/>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caption text-label-caption text-on-surface font-semibold">
                      {t('layanan.pilarModul.m5StatLabel')}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {t('layanan.pilarModul.m5StatVal')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
