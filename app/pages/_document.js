import Document, { Html, Main, NextScript, Head } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
