import DaySelect from "@tis/ui/DaySelect";
import MrcSelect from "../../features/lovs/MrcSelect";
import TableOperations from "@tis/ui/TableOperations";
// import ButtonText from "@tis/ui/ButtonText";
import { useMoveBack } from "@tis/hooks/useMoveBack";

function DayT4TableOperation() {
  const moveBack = useMoveBack();

  return (
    <>
      <TableOperations>
        <MrcSelect />
        <DaySelect />
        {/* <ButtonText onClick={moveBack}>&larr; Изађи</ButtonText> */}
      </TableOperations>
    </>
  );
}

export default DayT4TableOperation;
