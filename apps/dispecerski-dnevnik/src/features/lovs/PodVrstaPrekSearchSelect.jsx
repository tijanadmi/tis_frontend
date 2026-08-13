import { usePodVrstaPrek } from "./usePodVrstaPrek";
import SearchSelect from "@tis/ui/SearchSelect";

function PodVrstaPrekSearchSelect({ value, onChange, isDisabled }) {
    // console.log("🔥 PodVrstaPrekSearchSelect render, value =", value);
  const { isLoading, podvrstaprek } = usePodVrstaPrek();

  if (isLoading) return <p>Учитавање...</p>;

  const options =
    podvrstaprek?.map((vp) => ({
      value: String(vp.id_s_vr_prek), // 👈 BITNO: string (kao native select)
      label: vp.opis  + " - " + vp.naziv,
      id_tip_objekta_ndc: vp.id_tip_objekta,  // 👈 DODATNO POLJE
      id_tip_dogadjaja_ndc: vp.id_tip_dogadjaja,  // 👈 DODATNO POLJE
    })) ?? [];

  return (
    <SearchSelect
      options={options}
      value={value ?? ""}   // 👈 uvek kontrolisana vrednost
      onChange={(opt) => {
        // console.log("iPoruka iz komponente PodVrstaPrekSearchSelect: PodVrstaPrek changed to:", opt);
        onChange(opt);     // 👈 RHF dobija samo ID
      }}
      isDisabled={isDisabled}
      placeholder="Изабери врсту прекида..."
      returnOption   // 👈 KLJUČNO
    />
  );
}

export default PodVrstaPrekSearchSelect;