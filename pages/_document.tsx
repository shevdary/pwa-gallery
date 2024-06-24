import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Banner from "../components/Banner";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description"/>
          <meta name="keywords" content="Keywords"/>
          <meta name="application-name" content="PWA App"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
          <meta name="apple-mobile-web-app-title" content="PWA App"/>
          <meta name="description" content="Best PWA App in the world"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
          <meta name="msapplication-TileColor" content="#2B5797"/>
          <meta name="msapplication-tap-highlight" content="no"/>
          <meta name="theme-color" content="#000000"/>

          <link rel="manifest" href="/manifest.json"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:url" content="https://yourdomain.com"/>
          <meta name="twitter:title" content="PWA App"/>
          <meta name="twitter:description" content="Best PWA App in the world"/>
          <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png"/>
          <meta name="twitter:creator" content="@DavidWShadow"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="PWA App"/>
          <meta property="og:description" content="Best PWA App in the world"/>
          <meta property="og:site_name" content="PWA App"/>
          <meta property="og:url" content="https://yourdomain.com"/>
          <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png"/>

          <title>Next.js PWA Example</title>

          <link crossOrigin="use-credentials" rel="manifest" href="../public/manifest.json"/>
          <meta name="theme-color" content="#317EFB"/>
        </Head>
        <body>
        <div>
          <Banner/>
          <Main/>
        </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

