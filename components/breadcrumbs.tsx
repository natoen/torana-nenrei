import Link from 'next/link';
import style from '@emotion/styled'

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Ol = style.ol`
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	list-style: none;
	margin: 0;
  padding: 0;

	li + li::before {
		color: #b5b5b5;
		content: "/";
	}
	
	a {
		color: #25A4D3;
		padding: 0 .5em;

		:hover {
			color: #363636;
		}
	}`

export type PathArray = Readonly<{
  href: string
  breadcrumb: string
}>

// NOTE: modified breadcrumbs since we only show homepage and nansai page
const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<PathArray[] | null>(null);

  useEffect(() => {
    if (router) {
      const pathArray:　PathArray[] = [
				{
					breadcrumb: "トイサブ！",
					href: '/'
				},
				{
          breadcrumb: router.asPath[8] + "歳ごろのおもちゃ一覧",
          href: router.asPath
    		}]
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav>
      <Ol>
        {breadcrumbs.map((breadcrumb, i) => (
			    <li key={breadcrumb.href}>
				    <Link href={breadcrumb.href}>
					    <a>{breadcrumb.breadcrumb}</a>
				    </Link>
			    </li>
        ))}
      </Ol>
    </nav>
  );
};

export default Breadcrumbs;