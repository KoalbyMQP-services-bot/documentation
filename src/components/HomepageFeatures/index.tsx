import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type DocSection = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const DocSections: DocSection[] = [
  {
    title: 'URDF',
    icon: '🤖',
    description: 'Robot model and configuration files',
    link: '/sections/urdf',
  },
  {
    title: 'Vision',
    icon: '👁️',
    description: 'Computer vision and object detection',
    link: '/sections/vision',
  },
  {
    title: 'Monitoring',
    icon: '📊',
    description: 'Performance monitoring and diagnostics',
    link: '/sections/performance-monitoring',
  },
];

function DocButton({title, icon, description, link}: DocSection) {
  return (
    <Link to={link} className={styles.docButton}>
      <div className={styles.docIcon}>{icon}</div>
      <div className={styles.docContent}>
        <Heading as="h3" className={styles.docTitle}>
          {title}
        </Heading>
        <p className={styles.docDescription}>{description}</p>
      </div>
      <div className={styles.docArrow}>→</div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.docGrid}>
          {DocSections.map((props, idx) => (
            <DocButton key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
