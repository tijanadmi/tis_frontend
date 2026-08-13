import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardOperation from "../features/dashboard/DashboardOperation";
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Месечни извештај</Heading>
        <DashboardOperation />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
