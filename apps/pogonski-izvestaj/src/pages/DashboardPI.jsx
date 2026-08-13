import DashboardPILayout from "../features/dashboardPI/DashboardPILayout";
import DashboardDayOperation from "../features/dashboardDay/DashboardDayOperation";
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";

function DashboardPI() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Погонски извештај</Heading>
        <DashboardDayOperation />
      </Row>
      <DashboardPILayout />
    </>
  );
}

export default DashboardPI;
