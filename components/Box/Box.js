import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { spacing, isObjectEmpty, theme as defaultTheme,  } from '../../utils';

const StyledBox = ({
  paddingX,
  paddingY,
  marginX,
  marginY,
  width,
  display,
  theme,
  ...props
}) => {

  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

  const padding = spacing[props.padding];
  let paddingTop = spacing[props.paddingTop];
  let paddingRight = spacing[props.paddingRight];
  let paddingBottom = spacing[props.paddingBottom];
  let paddingLeft = spacing[props.paddingLeft];

  if (paddingX) {
    paddingLeft = spacing[paddingX];
    paddingRight = spacing[paddingX];
  }

  if (paddingY) {
    paddingTop = spacing[paddingY];
    paddingBottom = spacing[paddingY];
  }

  let margin = spacing[props.margin];
  let marginTop = spacing[props.marginTop];
  let marginRight = spacing[props.marginRight];
  let marginBottom = spacing[props.marginBottom];
  let marginLeft = spacing[props.marginLeft];

  if (marginX) {
    marginLeft = spacing[marginX];
    marginRight = spacing[marginX];
  }

  if (marginY) {
    marginTop = spacing[marginY];
    marginBottom = spacing[marginY];
  }

  return {
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    display,
    fontFamily: theme.typography.fontFamily,
  };
};

const IGNORED_PROPS = ['display', 'width'];

const boxConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};

export const Box = styled('div', boxConfig)(StyledBox);
