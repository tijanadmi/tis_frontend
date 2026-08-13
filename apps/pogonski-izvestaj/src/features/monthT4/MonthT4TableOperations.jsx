import YearSelect from "@tis/ui/YearSelect";
import MonthSelect from "@tis/ui/MonthSelect";
import TableOperations from "@tis/ui/TableOperations";
// import ButtonText from "@tis/ui/ButtonText";
import { useMoveBack } from "@tis/hooks/useMoveBack";

function MonthT4TableOperation() {
  const moveBack = useMoveBack();

  return (
    <>
      <TableOperations>
        <MonthSelect />
        <YearSelect></YearSelect>
        {/* <ButtonText onClick={moveBack}>&larr; Изађи</ButtonText> */}
      </TableOperations>
    </>
  );
}

export default MonthT4TableOperation;
