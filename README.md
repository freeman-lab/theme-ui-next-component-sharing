# theme-ui-next-component-sharing

Test repo for understanding how to bundle `React` components built with `theme-ui` and then consume them in a `next.js` app. Tests some common functionality including:
- basic theme application
- accessing the theme via a hook
- the use of `next/link` to wrap a `theme-ui` `Link`

The following works assuming we are publishing to npm.

First, build and publish the component
- go into the `component` folder
- `npm install`
- `npm run build`
- `npm publish`

Second, consume it in the app
- go into the `app` folder
- `npm install`
- `npm run dev`

I cannot, however, get this to work with any form of local installation or local linking due to issues of symlinks and duplicate packages
- duplicate `react` installatinos leads to an error involving hooks (related to [this](https://medium.com/@penx/managing-dependencies-in-a-node-package-so-that-they-are-compatible-with-npm-link-61befa5aaca7))
- duplicate `theme-ui` installations appears to prevent the consumed compone from picking up the correct theme, though this one remains more mysterious to me