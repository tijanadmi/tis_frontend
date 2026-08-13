import JSDSShemeOperation from "../features/jsdsSheme/JSDSShemeOperation";
import JSDSShemeTable from "../features/jsdsSheme/JSDSShemeTable";
import Heading from "@tis/ui/Heading";
import Row from "@tis/ui/Row";

function JSDSSheme() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Једнополне и диспозиционе шеме</Heading>
        <JSDSShemeOperation />
      </Row>

      <JSDSShemeTable />
    </>
  );
}

export default JSDSSheme;