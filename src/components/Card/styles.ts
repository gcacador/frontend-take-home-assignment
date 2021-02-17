import styled from 'styled-components';

// MIXINS
import { boxShadow } from '../../styles/mixins';

const StyledCard = styled.main`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  padding: 24px;
  background-color: ${props => props.theme.colors.white};

  ${boxShadow()}

  @media (min-width: 900px) {
    padding: 40px;
  }
`;

export { StyledCard };
