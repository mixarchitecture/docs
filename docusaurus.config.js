// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mix Architecture",
  tagline: "Be the best of the best",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://mixarchitecture.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mixarchitecture", // Usually your GitHub org/user name.
  projectName: "arch", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      tr: {
        htmlLang: "tr-TR",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mixarchitecture/docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mixarchitecture/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "Mix Arch",
        logo: {
          alt: "Mix Arch Logo",
          src: "img/logo.png",
        },
        items: [
          {
            position: "right",
            type: "localeDropdown",
          },
          {
            href: "https://github.com/mixarchitecture/arch",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/mixarchitecture",
              },
              {
                label: "Discord",
                href: "https://discord.gg/juUrdxEZv9",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/mix_arch",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mixarchitecture/arch",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/mixarchitecture/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mix Architecture. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#003F8C",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
