import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ServicesProps {}

const StyledServices = styled.div`
  color: pink;
`;

export function Services(props: ServicesProps) {
  return (
    <StyledServices>
      <h1>Welcome to Services!</h1>
    </StyledServices>
  );
}

export default Services;
