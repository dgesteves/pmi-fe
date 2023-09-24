import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsumerRegistrationProps {}

const StyledConsumerRegistration = styled.div`
  color: pink;
`;

export function ConsumerRegistration(props: ConsumerRegistrationProps) {
  return (
    <StyledConsumerRegistration>
      <h1>Welcome to ConsumerRegistration!</h1>
    </StyledConsumerRegistration>
  );
}

export default ConsumerRegistration;
