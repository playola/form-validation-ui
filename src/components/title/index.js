import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ theme, isFormik = false }) => (
    isFormik ? theme.color.formikPrimary : theme.color.reactHookFormPrimary
  )};
`;

export default Title;
