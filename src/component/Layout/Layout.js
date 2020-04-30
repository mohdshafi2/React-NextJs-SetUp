import React from 'react'
import Header from "../Header";
import Head from "next/head";

const Layout = (props) => {
  return (
      <div>
        <Head>
          <title>{props.titleTag}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
        {props.children}

      </div>
  )
}

export default Layout