import React from 'react';
import reactIcon from '@Assets/img/react-icon.png';
import heartIcon from '@Assets/img/heart-icon.png';
import formikIcon from '@Assets/img/formik-icon.png';
import { HeaderWrapper, Image } from './styles';

const Header = () => (
  <HeaderWrapper>
    <Image src={reactIcon} />
    <Image src={heartIcon} width={10} />
    <Image src={formikIcon} />
  </HeaderWrapper>
);

export default Header;
