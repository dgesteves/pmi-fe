import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SalesOnSpotProps {}

const StyledSalesOnSpot = styled.div`
  color: pink;
`;

export function SalesOnSpot(props: SalesOnSpotProps) {
  return (
    <StyledSalesOnSpot>
      <h1>Welcome to SalesOnSpot!</h1>
    </StyledSalesOnSpot>
  );
}

export default SalesOnSpot;
