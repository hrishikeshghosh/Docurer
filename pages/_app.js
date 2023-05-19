import React from "react";
import ReactDom from "react-dom";
import Head from "next/head";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Layout from "@/layout/Layout";
import favicon from "@/public/images/favicon-32x32.png";
import AppStore from "./AppContext";
import "../public/scss/main.scss";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div>
        <Toaster position="top-right"></Toaster>
      </div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        //open graph meta tags for link preview
        <meta property="og:title" content="Docurer" />
        <meta property="og:description" content="Live Healthy" />
        <meta property="og:image" content={favicon} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>Docurer</title>
      </Head>
      <AppStore>
        <SessionProvider session={pageProps.session}>
          <Layout children={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </AppStore>
    </React.Fragment>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
