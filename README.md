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
 - CSS is not for mobile
 - Redux is not used here since it's a simple web app based from a web page
 - SSR is not implemented
 - linters and formatters are not used
 - testing is not implemented
 - this is a development version

 ## Installation
 - you should have a Node.js v16.13.0 and an NPM v8.1.1
 - `npm install`
 - `npm run dev`
 - `http://localhost:3000/`, `http://localhost:3000/nenrei`, `http://localhost:3000/nenrei/0sai`, `http://localhost:3000/nenrei/0sai?page=2`

 ## 画面写真
 
 <img width="1506" alt="Screen Shot 2021-11-04 at 12 14 13 PM" src="https://user-images.githubusercontent.com/14366908/140259056-a927cf78-e93a-47e9-a929-cf7b444f4c89.png">

<img width="1503" alt="Screen Shot 2021-11-04 at 12 14 28 PM" src="https://user-images.githubusercontent.com/14366908/140259073-2b7e68f8-460b-4905-b3fd-a94991d7201b.png">

<img width="1505" alt="Screen Shot 2021-11-04 at 12 14 41 PM" src="https://user-images.githubusercontent.com/14366908/140259088-514d409d-71fb-4bb5-9ee7-8b94889b690a.png">

<img width="1501" alt="Screen Shot 2021-11-04 at 12 14 55 PM" src="https://user-images.githubusercontent.com/14366908/140259115-13b1d427-6374-4daf-89d4-5c8a55b95eaf.png">

<img width="1505" alt="Screen Shot 2021-11-04 at 12 15 11 PM" src="https://user-images.githubusercontent.com/14366908/140259144-1f024a9d-c61e-4db7-9ff7-3dba6b54619c.png">

<img width="1496" alt="Screen Shot 2021-11-04 at 12 15 19 PM" src="https://user-images.githubusercontent.com/14366908/140259161-e31ae232-ee1f-4273-9743-067a79af5194.png">

<img width="1441" alt="Screen Shot 2021-11-04 at 12 55 32 PM" src="https://user-images.githubusercontent.com/14366908/140259172-83480eee-7026-4427-a769-75ae6456f1b6.png">

