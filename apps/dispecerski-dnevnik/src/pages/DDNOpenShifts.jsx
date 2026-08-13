
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";
import DashboardDDNLayout from "../features/dashboardDDN/DashboardDDNLayout";

function DDNOpenShifts() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Отворене смене</Heading>
         
      </Row>
      <DashboardDDNLayout />
      
    </>
  );
}

export default DDNOpenShifts;