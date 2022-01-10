import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link
            href={
              'https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/8af0edd/css/all.css'
            }
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
