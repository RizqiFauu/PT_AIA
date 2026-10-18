import ProfilHero from '../components/profil/ProfilHero'
import ProfilBackground from '../components/profil/ProfilBackground'
import ProfilVisiMisi from '../components/profil/ProfilVisiMisi'
import ProfilTataKelola from '../components/profil/ProfilTataKelola'
import ProfilTautanTerkait from '../components/profil/ProfilTautanTerkait'
import ProfilCta from '../components/profil/ProfilCta'

export default function ProfilPage() {
  return (
    <div className="flex flex-col w-full">
      <ProfilHero />
      <ProfilBackground />
      <ProfilVisiMisi />
      <ProfilTataKelola />
      <ProfilTautanTerkait />
      <ProfilCta />
    </div>
  )
}
