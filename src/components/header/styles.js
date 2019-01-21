import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 20px 0 5px 0;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`${({
  width,
  theme,
}) => css`
  width: ${width || 40}%;

  @media (min-width: ${theme.breakpoint.tablet}px) {
    width: ${(width - width / 4) || 25}%;
  }

  @media (min-width: ${theme.breakpoint.desktop}px) {
    width: ${(width - width / 2) || 15}%;
  }
`}`;
