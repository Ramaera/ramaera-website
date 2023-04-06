import { useEffect } from "react"
import "../styles/globals.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { ApolloProvider } from "@apollo/client"
import { getApolloClient } from "apollo"
import { persistor, store } from "../state/store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
// import client from "../apollo/index"

export default function App({ Component, pageProps }) {
  const client = getApolloClient()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Head>
        <title key="title">Ramaera Industries</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        ></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        ></link>
        {/* <meta charset="utf-8"></meta> */}
        <meta itemprop="name" content="Ramaera Industries}"></meta>
        <meta
          itemprop="description"
          content="An Integrated multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people."
        ></meta>
        <meta itemprop="image" content="/logo/logo.png"></meta>
        <meta
          name="description"
          content="An Integrated multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
          "
        ></meta>
        <meta property="og:image" content="/logo/logo.png"></meta>
      </Head>
      <NextNProgress color="#f9d523" startPosition={0.4} height={3} />

      {
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </PersistGate>
        </Provider>
      }
    </>
  )
}
