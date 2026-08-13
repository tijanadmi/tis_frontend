import YearSelect from "@tis/ui/YearSelect";
import MonthSelect from "@tis/ui/MonthSelect";
import TableOperations from "@tis/ui/TableOperations";

function DashboardOperation() {
  return (
    <>
      <TableOperations>
        <MonthSelect />
        <YearSelect></YearSelect>
      </TableOperations>
    </>
  );
}

export default DashboardOperation;
