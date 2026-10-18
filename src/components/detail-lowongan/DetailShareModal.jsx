import React, { useState } from 'react';

export default function DetailShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://amalichwanarindo.co.id/lowongan/operator-taiwan';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      setCopied(true);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-margin" id="shareModal" onClick={(e) => { if (e.target.id === 'shareModal') onClose(); }}>
      <div className="bg-surface-container-lowest rounded-xl max-w-md w-full p-space-lg shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-space-md">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Bagikan Lowongan Kerja</h3>
          <button
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"
            id="btnCloseShareModal"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          Bantu kerabat dan keluarga Anda mengakses lowongan kerja resmi terverifikasi SISKOP2MI tanpa pungli ke Taiwan.
        </p>
        <div className="space-y-space-sm mb-space-md">
          <button
            className="w-full h-11 px-space-md rounded bg-surface-container-low flex items-center justify-between font-label-button text-label-button text-on-surface hover:bg-surface-container transition-colors"
            id="btnCopyJobLink"
            type="button"
            onClick={handleCopy}
          >
            <span className="truncate pr-2" id="jobUrlDisplay">{shareUrl}</span>
            <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">content_copy</span>
          </button>
          {copied && (
            <div className="font-label-caption text-label-caption text-on-tertiary-container" id="copyToast">
              Tautan berhasil disalin ke papan klip!
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-space-sm">
          <a
            className="h-10 rounded bg-[#25D366] text-white flex items-center justify-center gap-2 font-label-button text-label-button shadow-sm hover:opacity-90 transition-opacity"
            href={`https://wa.me/?text=${encodeURIComponent(`Lowongan Kerja Resmi Taiwan: ${shareUrl}`)}`}
            id="shareWaLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Bagikan ke WhatsApp</span>
          </a>
          <a
            className="h-10 rounded bg-[#1877F2] text-white flex items-center justify-center gap-2 font-label-button text-label-button shadow-sm hover:opacity-90 transition-opacity"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            id="shareFbLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Bagikan ke Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}
