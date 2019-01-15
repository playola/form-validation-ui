import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Title = styled.h1`${({
  innerTitle,
  theme,
}) => css`
  color: ${theme.primary};
  font-size: ${innerTitle ? '1.5em' : '2em'};
`}`;

Title.propTypes = {
  innerTitle: PropTypes.bool,
  theme: PropTypes.objectOf(PropTypes.string),
};

export default Title;
