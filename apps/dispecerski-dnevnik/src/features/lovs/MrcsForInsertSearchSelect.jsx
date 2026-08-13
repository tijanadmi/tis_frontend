import { useMrcsForInsert } from "./useMrcsForInsert";
import SearchSelect from "@tis/ui/SearchSelect";

function MrcsForInsertSearchSelect({ value, onChange, isDisabled }) {
    // console.log("🔥 MrcsForInsertSearchSelect render, value =", value);
  const { isLoading, mrcs } = useMrcsForInsert();

  if (isLoading) return <p>Учитавање...</p>;

  const options =
    mrcs?.map((mrc) => ({
      value: String(mrc.id), // 👈 BITNO: string (kao native select)
      label: mrc.name,
    })) ?? [];

  return (
    <SearchSelect
      options={options}
      value={value ?? ""}   // 👈 uvek kontrolisana vrednost
      onChange={(val) => {
        // console.log("iPoruka iz komponente MrcsForInsertSearchSelect: MrcsForInsert changed to:", val);
        onChange(val);     // 👈 RHF dobija samo ID
      }}
      isDisabled={isDisabled}
      placeholder="Изабери РДЦ..."
    />
  );
}

export default MrcsForInsertSearchSelect;
