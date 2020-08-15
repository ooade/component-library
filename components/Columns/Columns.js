import React from 'react';
import { Box } from '../Box';

export const Columns = ({ children, space, ...props }) => {
  return (
    <Box display="flex" {...props}>
      {React.Children.map(children, (child, index) => {
        if (child.type !== Box) {
          console.warn(
            'Each child in a Columns component should be a Box component'
          );
        }

        if (index > 0) {
          return React.cloneElement(child, {
            marginLeft: space,
            width: '100%',
          });
        }

        return React.cloneElement(child, { width: '100%' });
      })}
    </Box>
  );
};
