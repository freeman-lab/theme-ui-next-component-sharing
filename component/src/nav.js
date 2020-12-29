import React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Link } from 'theme-ui'

const Nav = () => {
  
  return <Box>
    <Box sx={{fontSize: [5]}}>
      This is a Next link that should navigate to /
    </Box>
    <NextLink href='/' passHref>
      <Link sx={{fontSize: [5]}}>Home</Link>
    </NextLink>
  </Box>
}

export default Nav
