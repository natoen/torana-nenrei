import Head from 'next/head'
import Image from 'next/image'

import { css } from '@emotion/react'
import type { NextPage } from 'next'


const aboutClass = css`
  display: block;
  padding: 47px;

  div {
    display: block;

    div {
      display: block !important;
      margin: auto;
    }

    p {
      padding: 35px;
      line-height: 28px;
      text-align: center; 
    }
  }`
    

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>上質なおもちゃ・知育玩具を定額レンタル【トイサブ！】</title>
      </Head>
      <main>
        <section css={aboutClass}>
          <div>
            <Image
              src="/toysub.svg"
              width={318}
              height={91}
              alt="Toysub logo"
              layout="fixed" />
            <p>
              トイサブ！とは、お子様の成長に合わせた <br />
              知育玩具・おもちゃを <br />
              定期的にお届け・交換する <br />
              新感覚の定額制レンタルサービスです。<br />
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
