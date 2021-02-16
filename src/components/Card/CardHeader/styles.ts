import styled from 'styled-components';

const StyledCardHeader = styled.header`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  align-items: center;
  width: 100%;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.text};
  margin: 0;
  margin-bottom: 4px;
`;

const StyledSubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
`;

export { StyledCardHeader, StyledTitle, StyledSubTitle };
