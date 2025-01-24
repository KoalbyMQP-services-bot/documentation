import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WPI Humanoid Robots MQP',
  tagline: 'Humanoid Robots Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentation.vercel.app',  // This will be your Vercel URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wpi-humanoid-robots-mqp', // Your GitHub org/user name.
  projectName: 'documentation', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wpi-humanoid-robots-mqp/documentation/tree/main/',
          routeBasePath: '/', // Set docs as the landing page
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WPI Humanoid Robots',
      logo: {
        alt: 'WPI Humanoid Robots Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
          to: '/category/documentation-tutorial'
        },
        {
          type: 'dropdown',
          label: 'Sections',
          position: 'left',
          items: [
            {
              label: 'URDF',
              to: '/sections/urdf',
            },
            {
              label: 'Vision',
              to: '/sections/vision',
            },
            {
              label: 'Performance Monitoring',
              to: '/sections/performance-monitoring',
            },
          ],
        },
        {
          href: 'https://github.com/KoalbyMQP',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Quick Links',
          className: 'footer-section-left',
          items: [
            {
              label: 'URDF',
              to: '/sections/urdf',
            },
            {
              label: 'Vision',
              to: '/sections/vision',
            },
            {
              label: 'Monitoring',
              to: '/sections/performance-monitoring',
            },
          ],
        },
        {
          title: 'Resources',
          className: 'footer-section-right',
          items: [
            {
              label: 'Documentation',
              to: '/category/documentation-tutorial',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/KoalbyMQP',
            },
          ],
        },
      ],
      copyright: ` ${new Date().getFullYear()} WPI Humanoid Robots`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
