import styled from 'styled-components';

const StyledTopbar = styled.header`
  display: grid;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.sizes.topbar};
  padding: 16px;

  @media (min-width: 900px) {
    height: ${props => props.theme.sizes.topbarDesktop};
    padding: 24px 56px;
  }
`;

export { StyledTopbar };
