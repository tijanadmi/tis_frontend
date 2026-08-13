import Filter from "@tis/ui/Filter";
import DaySelect from "@tis/ui/DaySelect";
import MrcSelect from "../../features/lovs/MrcSelect";
import TableOperations from "@tis/ui/TableOperations";
// import ButtonText from "@tis/ui/ButtonText";
import { useMoveBack } from "@tis/hooks/useMoveBack";

function DayT1TableOperation() {
  const moveBack = useMoveBack();

  return (
    <>
      <TableOperations>
        <Filter
          filterField="funp"
          options={[
            { value: "all", label: "Сви" },
            { value: "DV", label: "ДВП/КБП" },
            { value: "TR", label: "ТРП" },
            { value: "SP", label: "СП" },
            { value: "SS", label: "СС" },
            { value: "O", label: "Остало" },
          ]}
        />
        <MrcSelect />
        <DaySelect />
        {/* <ButtonText onClick={moveBack}>&larr; Изађи</ButtonText> */}
      </TableOperations>
    </>
  );
}

export default DayT1TableOperation;
