import React, { useState } from 'react';
import { useThemeUI, Box } from 'theme-ui';

var Primary = function Primary() {
  var _useState = useState(null);

  var _useThemeUI = useThemeUI(),
      theme = _useThemeUI.theme;

  console.log(theme);
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      fontSize: [5],
      color: 'primary'
    }
  }, "This is primary too");
};

var Secondary = function Secondary() {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      fontSize: [5],
      color: 'secondary'
    }
  }, "This is secondary too");
};

export { Primary, Secondary };
//# sourceMappingURL=index.esm.js.map
