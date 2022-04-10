import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@pages/index.style';

const Index: NextPage = () => {
  const [test, setTest] = useState<boolean>(false);

  const toggle = () => {
    setTest(!test);
  };

  return (
    <>
      <Head>
        <title>Lighthouse New Repo</title>
        <meta name="description" content="New repo with jest + tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main(test)}>
        <button className={styles.button} onClick={toggle}>
          Test
        </button>
      </main>
    </>
  );
};

export default Index;
