import Hero from '../components/Hero'
import CompanyIntro from '../components/CompanyIntro'
import LayananUtama from '../components/LayananUtama'
import NegaraTujuan from '../components/NegaraTujuan'
import MengapaMemilihKami from '../components/MengapaMemilihKami'
import TahapPenempatan from '../components/TahapPenempatan'
import Kredibilitas from '../components/Kredibilitas'
import Berita from '../components/Berita'
import CtaBanner from '../components/CtaBanner'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CompanyIntro />
      <LayananUtama />
      <NegaraTujuan />
      <MengapaMemilihKami />
      <TahapPenempatan />
      <Kredibilitas />
      <div id="berita">
        <Berita />
      </div>
      <CtaBanner />
    </div>
  )
}
