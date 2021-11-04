# トラーナ年齢別おもちゃペイジ（これ何？）

トラーナさんが使っているフロントエンド技術を使用して、[トイサブの年齢別おもちゃペイジ](https://toysub.net/nenrei/0sai/) をベースにしてウェブアップです。トラーナのフロントエンドポジションの応募の為の具材です。

## 使った技術
 - TypeScript, React.js, Next.js, and Emotion

## Files / Folders Walkthrough
 - components -- simplified modular breadcrumbs, navbar, and pagination components
 - data -- data used for the colors of the ages and toys information
 - pages:
    - our pages which is composed of `_app.tsx` where our navbars, global css, and other top things are
    - simple home page and toys by age page with modified pagination; only the age 0 has the toys data
 - public -- where our pictures are

## 範囲
 - Redux is not used here since it's a simple web app based from a web page
 - linters and formatters are not used
 - testing is not implemented
 - this is a development version

 ## Installation
 - you should have a Node.js v16.13.0 and an NPM v8.1.1
 - `npm install`
 - `npm run dev`
 - `http://localhost:3000/`, `http://localhost:3000/nenrei`, `http://localhost:3000/nenrei/0sai`, `http://localhost:3000/nenrei/0sai?page=2`
