import Head from 'next/head'
import Link from 'next/link'
import style from '@emotion/styled'

import { Age, ages } from "../../data/ages"
import type { NextPage } from 'next'
import { css } from '@emotion/react'


const nenreiClass = css`
  display: block;
  margin: auto;
  max-width: 1000px;
  
  p {
    font-size: 15.5px;
    line-height: 25px;
  }`

const H1 = style.h1`
  background-color: #00A6D6;
  color: #fff;
  text-align: center;
  font-size: 2.1em;
  padding: 0.5em 0;
  margin: 0.6em 0 0.9em;
  border-radius: 20px;
  font-weight: bold;`

const ulCLass = css`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 50px;
  padding: 0;
  
  li {
    box-sizing: border-box;
    height: 180px;
    padding: 10px 5px;
    width: 500px;
  }`

const aClass = ({ bgImg, color, arrowImg }: Age) => css`
  background-image: url(${bgImg});
  background-position: 70% center;
  background-repeat: no-repeat;
  background-size: auto 90%;
  border: 4px solid ${color};
  border-radius: 20px;
  color: #333;
  display: block;
  font-size: 28px;
  font-weight: bold;
  padding: 30px 28px 10px;
  position: relative;
  height: 110px;
  line-height: 90px;
  
  :first-letter {
    color: ${color};
    font-size: 2em;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    right: 5px;
    background-image: url(${arrowImg});
    width: 30px;
    height: 30px;
    top: 2em;
    background-size: contain;
    background-repeat: no-repeat;
  }
}`

const AgeLink = (props: Age) => (
  <Link href={`/nenrei/${props.age}sai`} passHref>
    <a css={aClass(props)}>
        {props.age}歳ごろ
    </a>
  </Link>
);

const AgePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>年齢別おすすめおもちゃ一例 | トイサブ！</title>
      </Head>
      <main>
        <section css={nenreiClass}> 
          <div>
            <H1>年齢別おすすめおもちゃ一例</H1>
            <p>トイサブ！で取り扱いしている、各年齢別のおすすめおもちゃの一部をご紹介します。こちらでご紹介するおもちゃはあくまで一例となります。トイサブ！では、1,600種類以上のおもちゃの中から、お子さま一人ひとりの年齢・発達やリクエストに合わせて、おもちゃを選定してお送りしています。</p>
            <ul css={ulCLass}>
              {ages.map((props: Age) => (
                <li key={props.age}>
                  <AgeLink {...props} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AgePage
