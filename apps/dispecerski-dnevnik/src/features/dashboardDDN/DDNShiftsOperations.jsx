import MrcSelect from "../lovs/MrcSelect";
// import YearSelect from "@tis/ui/YearSelect";
// import MonthSelect from "@tis/ui/MonthSelect";
import RangeDateSelect from "@tis/ui/RangeDateSelect";
import TableOperations from "@tis/ui/TableOperations";

function DDNShiftsOperations() {
  return (
    <>
      <TableOperations>
        <MrcSelect />

        <RangeDateSelect initialInterval={30}  />

      </TableOperations>
    </>
  );
}

export default DDNShiftsOperations;