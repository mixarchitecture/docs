import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from '../index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">En iyinin en iyisi olun</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/tr/docs/intro">
           Şimdi Başlayın &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}'dan Merhaba`}
      description="En iyi desenleri ve mimari çözümleri harmanlayın, en iyinin en iyisi olun!">
      <HomepageHeader />
      <main>
        <HomepageFeatures 
            lang="tr"
        />
      </main>
    </Layout>
  );
}