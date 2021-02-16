import styled from 'styled-components';

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
  min-height: calc(100vh - ${props => props.theme.sizes.topbar});
  padding: 32px 0;
  background-color: ${props => props.theme.colors.base};
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: ${props => props.theme.colors.primary};

  > strong {
    font-weight: 600;
  }
`;

export { StyledContainer, StyledTitle };
