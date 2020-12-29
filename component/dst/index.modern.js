import React, { useState } from 'react';
import { useThemeUI, Box } from 'theme-ui';

const Primary = () => {
  const [foo, setFoo] = useState(null);
  const {
    theme
  } = useThemeUI();
  console.log(theme);
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      fontSize: [5],
      color: 'primary'
    }
  }, "This is primary too");
};

const Secondary = () => {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      fontSize: [5],
      color: 'secondary'
    }
  }, "This is secondary too");
};

export { Primary, Secondary };
//# sourceMappingURL=index.modern.js.map
