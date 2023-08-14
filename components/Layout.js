/* eslint-disable react/jsx-key */

import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
    const links = [
        {
            key: 1,
            title: "Home", 
            path: "/"
        }, 
        {
          key: 2,
          title: "Top Stories", 
          path: "/news/top-stories"
        }, 
        {
          key: 3,
          title: "Popular", 
          path: "/news/popular"
        }, 
        {
          key: 4,
          title: "Sections", 
          path: "/sections"
        }
      ];
      const router = useRouter();
      return(
          <div className={styles.container}>
           {links.map(link => {
              const className = link.path === router.asPath ? styles.active : styles.link;
              return <Link href={link.path}><a className={className} key={link.title}>{link.title}{" "}</a></Link>;
           })}
            {children}
          </div>
      )
}