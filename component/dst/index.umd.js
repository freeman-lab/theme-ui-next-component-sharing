(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('theme-ui')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'theme-ui'], factory) :
  (global = global || self, factory(global.themeUiTestComponent = {}, global.react, global.themeUi));
}(this, (function (exports, React, themeUi) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var Primary = function Primary() {
    var _useState = React.useState(null);

    var _useThemeUI = themeUi.useThemeUI(),
        theme = _useThemeUI.theme;

    console.log(theme);
    return /*#__PURE__*/React__default['default'].createElement(themeUi.Box, {
      sx: {
        fontSize: [5],
        color: 'primary'
      }
    }, "This is primary too");
  };

  var Secondary = function Secondary() {
    return /*#__PURE__*/React__default['default'].createElement(themeUi.Box, {
      sx: {
        fontSize: [5],
        color: 'secondary'
      }
    }, "This is secondary too");
  };

  exports.Primary = Primary;
  exports.Secondary = Secondary;

})));
//# sourceMappingURL=index.umd.js.map
