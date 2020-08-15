export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getPropsByVariant = ({ variant, color, theme }) => {
  const colorInPalette = theme.palette[color];

  const computeDefaultOutlineVariant = () => ({
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
  });

  const computeOutlineVariantByPalette = () => ({
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
  });

  const computeSolidVariant = () => ({
    main: {
      border: `1px solid ${colorInPalette.main}`,
      backgroundColor: colorInPalette.main,
      color: colorInPalette.contrastText,
    },
    hover: {
      border: `1px solid ${colorInPalette.light}`,
      backgroundColor: colorInPalette.light,
    },
  });

  const variantsMap = {
    outline: colorInPalette
      ? computeOutlineVariantByPalette()
      : computeDefaultOutlineVariant(),
    default: colorInPalette && computeSolidVariant(),
  };

  return variantsMap[variant] || variantsMap.default;
};
