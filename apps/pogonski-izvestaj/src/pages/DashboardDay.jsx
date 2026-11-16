import DashboardDayLayout from "../features/dashboardDay/DashboardDayLayout";
import DashboardDayOperation from "../features/dashboardDay/DashboardDayOperation";
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";
import styled from "styled-components";

const HeaderRow = styled(Row)`
  gap: 1.6rem 2.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    & > div:last-child {
      width: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    & > div:last-child > * {
      flex: 1 1 16rem;
      min-width: 0;
    }
  }
`;

function DashboardDay() {
  return (
    <>
      <HeaderRow type="horizontal">
        <Heading as="h1">Дневни извештај</Heading>
        <DashboardDayOperation />
      </HeaderRow>
      <DashboardDayLayout />
    </>
  );
}

export default DashboardDay;
