import Link from 'next/link';
import Image from 'next/image'
import style from '@emotion/styled'

import { css } from '@emotion/react'


const headerClass = css`
  background-color: #FFFFFF;
  display: flex;
  height: 72px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;`

const NavMenuBar = style.nav`
  display: flex;
  margin: 0px auto;
  min-width: 1344px;
  padding: .5rem 0px;`

const DivLogo = style.div`
  display: flex;

  a {
    display: flex;
  }`

const UlMenu = style.ul`
  display: flex;
  list-style-type: none;
  margin-left: 250px;
  padding: 0px;

  a {
    font-size: 13.6px;
    position: relative;
    padding: 1.2rem .7rem;

    &:hover {
      background-color: #fafafa;
      color: #3273dc;
    }
  }`

export const Navbar = () => (
  <div css={headerClass}>
    <NavMenuBar>
      <DivLogo>
        <Link href="/">
          <a>
            <Image src="/toysub.svg" width={100} height={30} alt="Toysub logo"/>
          </a>
        </Link>
      </DivLogo>
      <UlMenu>
        <li>
          <Link href="/">
            <a>トイサブ！について</a>
          </Link>
        </li>
        <li>
          <Link href="/nenrei">
            <a>年齢別おもちゃ</a>
          </Link>
        </li>
      </UlMenu>
    </NavMenuBar>
  </div>
);

export default Navbar;