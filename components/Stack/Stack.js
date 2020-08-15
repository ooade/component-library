import React from 'react';
import { Box } from '../Box';
import { Columns } from '../Columns';

const StackChildrenTypes = [Box, Columns];
const UnsupportedChildTypeWarning =
  'Each child in a Stack component should be one of the types: Box, Columns';

export const Stack = ({ children, space, ...props }) => {
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => {
        if (!StackChildrenTypes.includes(child.type)) {
          console.warn(UnsupportedChildTypeWarning);
        }

        if (index > 0) {
          return React.cloneElement(child, { marginTop: space });
        }

        return child;
      })}
    </Box>
  );
};
