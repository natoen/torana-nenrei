import Link from 'next/link';
import style from '@emotion/styled'


const Nav = style.nav`
  display: inline-block;
  margin: 0 auto;

  ol {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    
    a {
      color: #25A4D3;
      padding: 0 .5em;

      :hover {
        color: #363636;
      }
    }
  }`

type PaginationProps = Readonly<{
  numOfItems: number,
  itemsPerPage: number,
  currentPageNum: number,
  currentPathname: string
}>

// NOTE: modified client side only pagination
const Pagination = ({
  currentPageNum,
  currentPathname,
  numOfItems,
  itemsPerPage,
}: PaginationProps) => {
  const endPage = Math.ceil(numOfItems / itemsPerPage)

  return (
    <Nav>
      <ol>
        {currentPageNum !== 1 ?
          <li><Link href={`${currentPathname}?page=${currentPageNum-1}`}>
            <a>{"< 前へ"}</a>
          </Link></li> : 
          null}
        {Array.from(Array(endPage).keys()).map((i) => (
			    <li key={i}>
          {currentPageNum !== i+1 ?
            <Link href={`${currentPathname}?page=${i+1}`}>
              <a>{i+1}</a>
            </Link> :
            i+1}
			    </li>
        ))}
        {currentPageNum !== endPage ?
          <li><Link href={`${currentPathname}?page=${currentPageNum+1}`}>
            <a>{"次へ >"}</a>
          </Link></li> : 
          null}
      </ol>
    </Nav>
  );
};

export default Pagination;
