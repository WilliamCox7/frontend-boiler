import Document, { DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });
    return await Document.getInitialProps(ctx);
  }
}

export default MyDocument;
