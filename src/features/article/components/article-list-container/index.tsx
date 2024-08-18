import { ReactNode } from 'react'

import styles from './index.module.css'

type Props = {
  children?: ReactNode
}

export default function ArticleListContainer({ children }: Props) {
  return <section className={styles.articleList}>{children}</section>
}
