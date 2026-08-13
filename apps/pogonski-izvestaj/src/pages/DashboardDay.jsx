import DashboardDayLayout from "../features/dashboardDay/DashboardDayLayout";
import DashboardDayOperation from "../features/dashboardDay/DashboardDayOperation";
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";

function DashboardDay() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Дневни извештај</Heading>
        <DashboardDayOperation />
      </Row>
      <DashboardDayLayout />
    </>
  );
}

export default DashboardDay;
