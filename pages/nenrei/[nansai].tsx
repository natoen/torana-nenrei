import Breadcrumbs from "../../components/breadcrumbs"
import Pagination from "../../components/pagination"
import Error from 'next/error'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import style from '@emotion/styled'

import { Age, ages } from "../../data/ages"
import { toysByAge, Toy } from "../../data/toys"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'


const ageNumClass = css`
  font-size: 16px;
  line-height: 25px;
  margin: 0 auto;
  padding: 20px 24px;
  text-align: center;
  width: 1344px;`

const divClass = (color : string)=> css`
	border: 4px solid ${color};
	border-radius: 10px;
	display: block;
	margin: 30px auto;
	padding: 20px;`

const h1Class = (color : string)=> css`
	background-color: ${color};
	border-radius: 25px;
	color: #FFFFFF;
	font-size: 30px;
	font-weight: 700;
	height: 46px;
	line-height: 45px;
	margin: 0 auto 1em;
	padding: 3px 0;
	text-align: center;
	width: 374px;`

const H2 = style.h2`
	color: #4a4a4a;
	font-size: 16px;
	font-weight: bold;
	margin: 1em 0;`

const Ol = style.ol`
	display: flex;
	list-style: none;
	justify-content: center;
	flex-wrap: wrap;

	li {
		display: list-item;
		padding: 5px;
	}
	
	a {
		align-items: center;
    border-radius: 50%;
		box-sizing: border-box;
		display: flex;
    font-size: 26px;
    font-weight: bold;
    height: 130px;
    justify-content: center;
		width: 130px;
	}`

const ulClass = (color : string)=> css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;
  margin: 0px auto;
  padding: 0px;

  li {
    display: list-item;
    height: 315px;
    padding: 10px;
    position: relative;
    width: 304px;

    div {
      border: 1px solid ${color};
      border-radius: 10px;
      box-sizing: content-box !important;
      height: 248px;
      margin: 10px 0px !important;
      padding: 10px;
      position: relative !important;
      width: 282px;

      img {
        position: relative !important;
      }
    }
  }`

const aClass = (
	{ color, isCurrent }: { color: string, isCurrent: boolean }
)=> css`
	background-color: ${isCurrent ? color : "#FFFFFF" };
	border: 3px solid ${color};
	color: ${isCurrent ? "#FFFFFF" : color};`


const AgeList = ({ currentAgeNum }: { currentAgeNum: string }) => {
	return (
		<Ol>
			{ages.map((props: Age) => (
				<li key={props.age}>
					<Link href={`/nenrei/${props.age}sai`}>
						<a css={aClass({ color: props.color, isCurrent: props.age.toString() === currentAgeNum })}>
							{props.age}歳ごろ
						</a>
					</Link>
				</li>
			))}
		</Ol>
	);
};


const AgeNumberPage: NextPage = () => {
	const { query: { nansai, page}, asPath } = useRouter()
  const pageNum = page && !Array.isArray(page) ? parseInt(page) : 1
  const itemsPerPage = 20
  const itemEnd = itemsPerPage * pageNum
  const itemStart = itemEnd - itemsPerPage

  if (!nansai) {
		return <Error statusCode={404} />
	}

	const ageNum = nansai[0]
	const color = ages[parseInt(ageNum)].color
  const toys = toysByAge[`age${ageNum}`]

  return (
    <div>
      <Head>
        <title>{ageNum}歳ごろのおもちゃ一覧 | トイサブ！</title>
      </Head>
      <main>
        <section css={ageNumClass}> 
					<Breadcrumbs />
					<AgeList currentAgeNum={ageNum} />

          <div css={divClass(color)}>
            <h1 css={h1Class(color)}>{ageNum}歳ごろのおもちゃ一覧</h1>

						<H2>{ageNum}歳ごろのお子様向け知育玩具として、基本的な体の動かし方を学べるものを選定します。</H2>
						<p>
							{ageNum}歳ごろは、握る、叩く、倒す、押す、追いかける、など単一行動による相応反応の学習及び体の動かし方を学習出来るものを選びます。<br />
							こちらでご紹介するおもちゃはあくまで一例となります。<br />
							トイサブ！では、1,600種類以上のおもちゃの中から、お子さま一人ひとりの年齢・発達やリクエストに合わせて、おもちゃを選定してお送りしています。
						</p>

            <ul css={ulClass(color)}>
              {(!toys || !toys.length) ? 
                "玩具のデータは未だありません" :
                toys.slice(itemStart, itemEnd).map((props: Toy) => (
                  <li key={props.name}>
                    <Image
                      src={props.img}
                      alt={`toy name: ${props.name}`}
                      layout="fill"
                      objectFit="contain" />
                    {props.name}
                  </li>
                ))}
            </ul>
          </div>

          <Pagination 
            itemsPerPage={itemsPerPage}
            currentPageNum={pageNum}
            currentPathname={asPath.split("?")[0]}
            numOfItems={toys.length} />
        </section>
      </main>
    </div>
  )
}

export default AgeNumberPage
