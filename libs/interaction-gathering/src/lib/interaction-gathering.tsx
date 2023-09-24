import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InteractionGatheringProps {}

const StyledInteractionGathering = styled.div`
  color: pink;
`;

export function InteractionGathering(props: InteractionGatheringProps) {
  return (
    <StyledInteractionGathering>
      <h1>Welcome to InteractionGathering!</h1>
    </StyledInteractionGathering>
  );
}

export default InteractionGathering;
