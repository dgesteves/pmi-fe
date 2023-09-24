import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DataPrivacyProps {}

const StyledDataPrivacy = styled.div`
  color: pink;
`;

export function DataPrivacy(props: DataPrivacyProps) {
  return (
    <StyledDataPrivacy>
      <h1>Welcome to DataPrivacy!</h1>
    </StyledDataPrivacy>
  );
}

export default DataPrivacy;
