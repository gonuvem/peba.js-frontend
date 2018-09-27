import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { buildManifest } = this.props;
    const { css } = buildManifest;
    return (
      <html>
        <Head>
          <title>Peba - Indexador de Dados Públicos</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
          {css.map(file => (
            <link rel="stylesheet" href={`/_next/${file}`} key={file} />
          ))}
          <link rel="shortcut icon" href="../static/images/favicon.png"></link>
          <link rel="stylesheet" href="../static/css/index.css" />
          <link rel="stylesheet" href="../static/css/Paginator.css" />
          <meta name="viewport" content="width=device-width" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}