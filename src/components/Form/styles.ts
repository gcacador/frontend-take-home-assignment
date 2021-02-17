import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > :last-child {
    margin-top: 16px;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas: 'element-0 element-1' 'element-2 element-2' 'element-3 element-3';
    grid-template-columns: 272px auto;
  }
`;

export { StyledForm };
