import styled from 'styled-components';

// MIXINS
import { boxShadow } from '../../styles/mixins';

const StyledCard = styled.main`
  display: grid;
  gap: 16px;
  width: 100%;
  padding: 24px;
  background-color: ${props => props.theme.colors.white};

  ${boxShadow()}
`;

export { StyledCard };
