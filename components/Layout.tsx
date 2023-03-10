import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Container from '@mui/material/Container';

import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Container>
        <Link href="/">
          <Image
            alt="Star wars logo"
            src="/sw_logo.png"
            height={100}
            width={180}
            className={styles.image}
          />
        </Link>
      </Container>
    </header>
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
