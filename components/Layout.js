import React from 'react'
import Head from './Head'
import Common from './Common'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <div className='layout'>
    <Head />
    <Common />
    {children}
  </div>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Layout
