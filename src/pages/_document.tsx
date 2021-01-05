import { DocumentInitialProps } from "next/dist/next-server/lib/utils";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MinimumEffortDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="horde-gradient-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MinimumEffortDocument;
