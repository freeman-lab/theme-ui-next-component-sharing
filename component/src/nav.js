import React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'theme-ui'

const Nav = () => {
  
  return <NextLink href='/' passHref>
    <Link>Home</Link>
  </NextLink>
}

export default Nav
