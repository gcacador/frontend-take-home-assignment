import styled from 'styled-components';

const StyledCardHeader = styled.header`
  display: grid;
  gap: 16px;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;

  @media (min-width: 900px) {
    gap: 24px;
  }
`;

const StyledTitle = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.text};
  margin: 0;
  margin-bottom: 4px;

  @media (min-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const StyledSubTitle = styled.h3`
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;

  @media (min-width: 900px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export { StyledCardHeader, StyledTitle, StyledSubTitle };
