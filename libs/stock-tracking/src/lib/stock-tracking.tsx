import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StockTrackingProps {}

const StyledStockTracking = styled.div`
  color: pink;
`;

export function StockTracking(props: StockTrackingProps) {
  return (
    <StyledStockTracking>
      <h1>Welcome to StockTracking!</h1>
    </StyledStockTracking>
  );
}

export default StockTracking;
