import DaySelect from "@tis/ui/DaySelect";
import MrcSelect from "../lovs/MrcSelect";
import TableOperations from "@tis/ui/TableOperations";

function DashboardDayOperation() {
  return (
    <>
      <TableOperations>
        <MrcSelect />
        <DaySelect />
      </TableOperations>
    </>
  );
}

export default DashboardDayOperation;
