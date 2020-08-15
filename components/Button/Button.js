import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  isObjectEmpty,
  spacing,
  fontSizes,
  theme as defaultTheme,
} from '../../utils';

const buttonSizeProps = {
  small: {
    fontSize: fontSizes['xsmall'],
    padding: `${spacing['xsmall']} ${spacing['small']}`,
  },
  medium: {
    fontSize: fontSizes['small'],
    padding: `${spacing['small']} ${spacing['medium']}`,
  },
  large: {
    fontSize: fontSizes['medium'],
    padding: `${spacing['medium']} ${spacing['large']}`,
  },
};

const getPropsByVariant = ({ variant, color, theme }) => {
  const colorInPalette = theme.palette[color];

  const defaultOutlineVariantProps = {
    main: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    hover: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  };

  const outlineVariantPropsByPalette = colorInPalette && {
    main: {
      border: `1px solid ${colorInPalette.main}`,
      backgroundColor: theme.palette.common.white,
      color: colorInPalette.main,
    },
    hover: {
      border: `1px solid ${colorInPalette.light}`,
      backgroundColor: theme.palette.common.white,
      color: colorInPalette.light,
    },
  };

  const defaultSolidVariantProps = {
    main: {
      border: `1px solid ${theme.palette.grey[100]}`,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.black,
    },
    hover: {
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[200],
    },
  };

  const solidVariantPropsByPalette = colorInPalette && {
    main: {
      border: `1px solid ${colorInPalette.main}`,
      backgroundColor: colorInPalette.main,
      color: colorInPalette.contrastText,
    },
    hover: {
      border: `1px solid ${colorInPalette.light}`,
      backgroundColor: colorInPalette.light,
    },
  };

  const variants = {
    outline: colorInPalette
      ? outlineVariantPropsByPalette
      : defaultOutlineVariantProps,
    solid: colorInPalette
      ? solidVariantPropsByPalette
      : defaultSolidVariantProps,
  };

  return variants[variant] || variants.solid;
};

const StyledButton = ({
  color,
  size,
  variant,
  enableElevation,
  disabled,
  theme,
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

  const fontSizeBySize = buttonSizeProps[size]?.fontSize;
  const paddingBySize = buttonSizeProps[size]?.padding;

  const propsByVariant = getPropsByVariant({ variant, theme, color });

  return {
    fontWeight: 500,
    cursor: 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.3s linear',
    padding: buttonSizeProps.medium.padding,
    fontSize: buttonSizeProps.medium.fontSize,
    borderRadius: theme.shape.borderRadius,
    fontFamily: theme.typography.fontFamily,
    boxShadow: enableElevation && theme.shadows[1],
    ...(propsByVariant && propsByVariant.main),
    ...(paddingBySize && { padding: paddingBySize }),
    ...(fontSizeBySize && { fontSize: fontSizeBySize }),
    '&:hover': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant.hover),
    },
  };
};

const IGNORED_PROPS = ['color'];

const buttonConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};

export const Button = styled('button', buttonConfig)(StyledButton);
