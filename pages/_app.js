import { useState, useEffect } from "react"
import Router from "next/router"
import "../styles/globals.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Loader from "../components/Loader/Loader"
//import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true))
    Router.events.on("routeChangeComplete", () => setLoading(false))
    Router.events.on("routeChangeError", () => setLoading(false))
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true))
      Router.events.off("routeChangeComplete", () => setLoading(false))
      Router.events.off("routeChangeError", () => setLoading(false))
    }
  }, [Router.events])
  return (
    <>
      {/* <NextNProgress color="#F9D423" startPosition={0.4} height={3} /> */}

      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  )
}
