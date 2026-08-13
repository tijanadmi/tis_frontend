import { Fragment } from "react";
import styled from "styled-components";
import IDKRow from "./IDKRow";
import Table from "@tis/ui/Table";
import Menus from "@tis/ui/Menus";
import ExportExcelButton from "@tis/ui/ExportExcelButton";

import { useListDDNInterruptionOfDeliveryKPeriod } from "./useListDDNInterruptionOfDeliveryKPeriod";
import { useListDDNInterruptionOfDeliveryKExcelPeriod } from "./useListDDNInterruptionOfDeliveryKExcelPeriod";
import Spinner from "@tis/ui/Spinner";
import Pagination from "@tis/ui/Pagination";
import Empty from "@tis/ui/Empty";

const StackedH = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Opis = styled.div`
  grid-column: 1 / -1;  /* 🔥 KLJUČNO */
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: var(--color-grey-500);
  font-size: 1.2rem;
  margin-left: 20px; /* Dodaje levi margin */
  border-bottom: 1px solid var(--color-grey-300); /* Dodaje crtu ispod */
  padding-bottom: 4px; /* Razmak između teksta i crte */
`;

function IDKTable() {
  const { prekidik, isLoading, count } = useListDDNInterruptionOfDeliveryKPeriod();
  const {
    prekidik: prekidikExcel,
    isLoading: isLoading2,
    count: count2,
  } = useListDDNInterruptionOfDeliveryKExcelPeriod();

  if (isLoading || isLoading2) return <Spinner />;
  // console.log("Prekidi korisnika u IDKTable:", prekidik);
  // console.log('count:', count);
  if (count === 0) return <Empty resourceName="прекид корисника" />;

  return (
    <Menus>
      <Table columns="2fr 2fr 1.5fr 1.5fr 2fr 1.5fr 2.5fr 1.2fr">
        <Table.Header>
          <StackedH>
            <span>Производни</span>
            <span>објекат</span>
          </StackedH>
          <StackedH>
            <span>Почетак</span>
            <span>Крај прек.</span>
          </StackedH>
          <StackedH>
            <span>Трајање</span>
            <span>[DD:HH:MI]</span>
          </StackedH>
          <StackedH>
            <span>Врста пр.</span>
          </StackedH>
          <StackedH>
            <span>Узрок/</span>
            <span>Подузрок</span>
          </StackedH>
          <StackedH>
            <span>Испала</span>
            <span>Снага</span>
          </StackedH>
          <StackedH>
            <span>Назив и број</span>
            <span>ММ без напајања</span>
          </StackedH>
          <StackedH>
            {count === count2 && (
              <ExportExcelButton
                data={prekidikExcel}
                filename="PrekidKorisnika.xlsx"
              >
                Excel
              </ExportExcelButton>
            )}
          </StackedH>

        </Table.Header>

        <Table.Body
          data={prekidik}
          //
          render={(pk) => (
            <Fragment key={pk.id}>
              
              <IDKRow key={pk.id} pk={pk} />
              <Opis>{pk.opis}</Opis>
            </Fragment>
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default IDKTable;
