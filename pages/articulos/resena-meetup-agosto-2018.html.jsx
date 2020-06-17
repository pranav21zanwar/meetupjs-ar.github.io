import PostPage from 'components/Blog/PostPage';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const { publicRuntimeConfig } = getConfig();
const metatags = {
  description:
    '¡Extra, extra! Llegó el resúmen del evento de Agosto en Avature donde hablamos de JSX y WebAssembly. Por Matias Blayer.',
  title: `Reseña del Meetup.js de Agosto 2018 - ${publicRuntimeConfig.REACT_APP_TITLE}`,
  url: `${publicRuntimeConfig.REACT_APP_URL}articulos/resena-meetup-agosto-2018.html`,
};

export default () => (
  <>
    <Head>
      <title>{metatags.title}</title>
      <meta name="description" content={metatags.description} />
      <meta property="og:url" content={metatags.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metatags.title} />
      <meta property="og:description" content={metatags.description} />
      <meta property="og:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meetupjs_ar" />
      <meta name="twitter:creator" content="@meetupjs_ar" />
      <meta name="twitter:title" content={metatags.title} />
      <meta name="twitter:description" content={metatags.description} />
      <meta name="twitter:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
    </Head>
    <PostPage name="resena-meetup-agosto-2018" />
  </>
);
