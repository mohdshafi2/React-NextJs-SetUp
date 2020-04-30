import React from 'react'

// global css
import '../src/styles/global.css'
// font
import '../public/fonts/font.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}