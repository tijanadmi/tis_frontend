import MrcSelect from "../../features/lovs/MrcSelect";
// import YearSelect from "@tis/ui/YearSelect";
// import MonthSelect from "@tis/ui/MonthSelect";
import RangeDateSelect from "@tis/ui/RangeDateSelect";
import TableOperations from "@tis/ui/TableOperations";

function IDPTableOperation() {
  return (
    <>
      <TableOperations>
        <MrcSelect />
        {/* <MonthSelect />
        <YearSelect></YearSelect> */}
        <RangeDateSelect initialInterval={30}  />
      </TableOperations>
    </>
  );
}

export default IDPTableOperation;
