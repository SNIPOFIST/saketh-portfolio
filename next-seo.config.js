/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  defaultTitle: "Saketh Kilaru",
  titleTemplate: "%s | Saketh Kilaru",
  description:
    "Data Engineer & AI enthusiast. Building scalable data pipelines, ML solutions, and analytics systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakethkilaru.dev/",
    siteName: "Saketh Kilaru",
    images: [
      {
        url: "https://sakethkilaru.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Saketh Kilaru Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@sakethkilaru",
    site: "@sakethkilaru",
    cardType: "summary_large_image",
  },
};

module.exports = SEO;
