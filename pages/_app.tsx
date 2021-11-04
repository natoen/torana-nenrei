import Head from 'next/head'
import Navbar from '../components/navbar'

import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { useRouter } from "next/router";


const globalCss = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,
      Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,
      Arial,sans-serif;
  }

  p, a {
    color: #4a4a4a;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }`

const heroClass = (pathname: string) => css`
  background-image: url("hero-bg.jpeg");
  background-position: center;
  background-size: cover;
  display: flex;
  height: ${pathname === "/" ? "472px" : "144px"};

  div {
    display: block;
    margin: auto;

    h1 {
      color: #FFFFFF;
      font-size: 40px;
      margin: auto;
      text-align: center;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      width: 888px;
    }
  }`

function MyApp({ Component, pageProps }: AppProps) {
  const pathname = useRouter().pathname

  return (
    <div>
      <Global styles={globalCss} />
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section css={heroClass(pathname)}> 
        {pathname === "/" ?
          <div>
            <h1>
              お子様の成長にあわせた知育玩具 <br />
              おもちゃを毎月定額でレンタル
            </h1>
          </div> : ""}
      </section>
      <Component {...pageProps} />
    </div>)
}

export default MyApp
