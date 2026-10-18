import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProfilPage from './pages/ProfilPage'
import StrukturOrganisasiPage from './pages/StrukturOrganisasiPage'
import LegalitasPage from './pages/LegalitasPage'
import LayananPage from './pages/LayananPage'
import NegaraTujuanPage from './pages/NegaraTujuanPage'
import LowonganPage from './pages/LowonganPage'
import DetailLowonganPage from './pages/DetailLowonganPage'
import KontakPage from './pages/KontakPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil-perusahaan" element={<ProfilPage />} />
          <Route path="/sejarah-perusahaan" element={<ProfilPage />} />
          <Route path="/visi-misi" element={<ProfilPage />} />
          <Route path="/nilai-perusahaan" element={<ProfilPage />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
          <Route path="/legalitas-perusahaan" element={<LegalitasPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/rekrutmen-tenaga-kerja" element={<LayananPage />} />
          <Route path="/penempatan-tenaga-kerja" element={<LayananPage />} />
          <Route path="/tenaga-kerja-profesional" element={<LayananPage />} />
          <Route path="/layanan-pemberi-kerja" element={<LayananPage />} />
          <Route path="/kemitraan-internasional" element={<LayananPage />} />
          <Route path="/negara-tujuan" element={<NegaraTujuanPage />} />
          <Route path="/lowongan-kerja" element={<LowonganPage />} />
          <Route path="/detail-lowongan" element={<DetailLowonganPage />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
