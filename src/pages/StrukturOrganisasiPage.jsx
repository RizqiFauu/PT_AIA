import StrukturHero from '../components/struktur/StrukturHero'
import StrukturHierarchy from '../components/struktur/StrukturHierarchy'
import StrukturRoles from '../components/struktur/StrukturRoles'
import StrukturGovernanceStats from '../components/struktur/StrukturGovernanceStats'
import StrukturCta from '../components/struktur/StrukturCta'

export default function StrukturOrganisasiPage() {
  return (
    <div className="flex flex-col w-full">
      <StrukturHero />
      <StrukturHierarchy />
      <StrukturRoles />
      <StrukturGovernanceStats />
      <StrukturCta />
    </div>
  )
}
