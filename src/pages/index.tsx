import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            WPI Humanoid Robots MQP
          </Heading>
          <p className={styles.heroSubtitle}>
            Internal documentation hub for MQP project
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.heroButton
              )}
              to="/category/documentation-tutorial">
              How to write documentation
            </Link>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.heroButton
              )}
              to="/admin">
              Write documentation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Internal documentation for our elderly care robotics project">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
