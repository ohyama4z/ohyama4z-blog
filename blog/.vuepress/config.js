module.exports = {
  // title of website
  title: "おおやま手記",

  // description of website
  description: "おおやまのブログです。ぼちぼち書いていきます",

  // language of website
  locales: {
    "/": {
      lang: "ja",
    },
  },

  // head information of website
  head: [
    // need favicon
    ["meta", { name: "og:title", content: "おおやま手記" }],
    // ["meta", { name: "og:url", content: "https://meuniere.dev/" }],
    ["meta", { name: "og:type", content: "website" }],
    [
      "meta",
      {
        name: "og:image",
        content: "favicon.ico",
      },
    ],
  ],

  // markdown config
  markdown: {
    lineNumbers: true,
    linkfy: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"))
    },
  },

  // theme to use
  //theme: "meteorlxy", // OR shortcut: @vuepress/blog

  themeConfig: {
    // language of this theme
    lang: "en-US",

    // personal information
    personalInfo: {
      nickname: "ohyama4z",

      email: "ohyama4z000@gmail.com",

      location: "苫小牧高専🏫",

      avatar: "/img/myicon_2.jpg",

      sns: {
        // github account and link
        github: {
          account: "ohyama4z",
          link: "https://github.com/ohyama4z",
        },

        // twitter account and link
        twitter: {
          account: "ohyama4z",
          link: "https://twitter.com/ohyama4z",
        },
      },

      domain: "https://ohyama4z-blog.netlify.com",
    },

    // header config
    header: {
      background: {
        // use random pattern
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // footer config
    footer: {
      // show 'Powered by VuePress' or not
      poweredBy: true,

      // show the theme
      poweredByTheme: true,
    },

    // info card config
    infoCard: {
      // the background of the info card's header
      headerBackground: {
        // use random pattern
        useGeo: true,
      },
    },

    // show the last updated time of posts
    lastUpdated: true,

    // enable smooth scrolling or not
    smoothScroll: true,

    // pagination config
    pagination: {
      perPage: 5,
    },

    comments: false,

    // the content of navbar links
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Posts", link: "/posts/", exact: false },
    ],
  },
  plugins: {
    seo: {
      description: ($page, $site) =>
        $page.frontmatter.description ||
        ($page.excerpt &&
          $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")) ||
        $site.description ||
        "",
      title: ($page, $site) => $page.title || $site.title,
      image: ($page, $site) =>
        ($page.frontmatter.image &&
          ($site.themeConfig.domain || "") + $page.frontmatter.image) ||
        "http://placehold.jp/40/ffffff/ffffff/600x315.png?css=%7B%22background-image%22%3A%22url(http%3A%2F%2Fplacehold.jp%2Fbc544b%2F420c09%2F130x30.png%3Ftext%3Dohyama4z-blog)%22%2C%22padding-left%22%3A%2280px%22%2C%22padding-right%22%3A%2280px%22%7D&text=" +
          encodeURIComponent($page.title || $site.title),
    },
  },
}
