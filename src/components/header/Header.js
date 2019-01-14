import React from 'react';
import { image } from '@Assets/img';
import {
  HeaderWrapper,
  Image,
  Title,
} from './styles';

const Header = () => (
  <HeaderWrapper>
    <Image src={image.reduxFormIcon} />
    <Title>Form Validation UI</Title>
  </HeaderWrapper>
);

export default Header;
