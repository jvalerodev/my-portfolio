import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <title>Jesús Valero - Web Developer</title>

      <meta
        name="description"
        content="Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications."
      />
      <meta property="og:title" content="Jesús Valero - Web Developer" />
      <meta
        property="og:description"
        content="Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications."
      />
      <meta property="og:type" content="website" />
      <meta property="og:email" content="jvalerodev@gmail.com" />
      <meta
        property="og:image"
        content="https://jvalero.dev/img/portfolio.png"
      />
      <meta property="og:url" content="https://jvalero.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jesús Valero - Web Developer" />
      <meta
        name="twitter:description"
        content="Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications."
      />
      <meta
        name="twitter:image"
        content="https://jvalero.dev/img/portfolio.png"
      />
      <meta
        name="keywords"
        content="Jesus Valero, jvalero, jvalerodev, web developer"
      />
    </Head>
  );
};

export default SEO;
