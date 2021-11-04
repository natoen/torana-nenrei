export type Age = Readonly<{
  arrowImg: string
  age: number
  bgImg: string
  color: string
}>

export const ages: ReadonlyArray<Age> = [
  {
    age: 0,
    arrowImg: "arrows/arr1.png",
    color: "#FF7C4D",
    bgImg: "nenrei/nenrei_0.jpg"
  },
  {
    age: 1,
    arrowImg: "arrows/arr2.png",
    color: "#00A6D6",
    bgImg: "nenrei/nenrei_1.jpg"
  },
  {
    age: 2,
    arrowImg: "arrows/arr3.png",
    color: "#74BE1B",
    bgImg: "nenrei/nenrei_2.jpg"
  },
  {
    age: 3,
    arrowImg: "arrows/arr4.png",
    color: "#FFC300",
    bgImg: "nenrei/nenrei_3.jpg"
  },
  {
    age: 4,
    arrowImg: "arrows/arr5.png",
    color: "#FF8594",
    bgImg: "nenrei/nenrei_4.jpg"
  },
  {
    age: 5,
    arrowImg: "arrows/arr6.png",
    color: "#C68FE4",
    bgImg: "nenrei/nenrei_5.jpg"
  }
]
