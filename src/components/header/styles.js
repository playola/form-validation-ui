import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 150px;
  padding-top: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

export const Image = styled.img`
  width: 100px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;
