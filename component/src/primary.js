import React from 'react'
import { useState } from 'react'
import { useThemeUI, Box } from 'theme-ui'

const Primary = () => {
  const [foo, setFoo] = useState(null)
  const { theme } = useThemeUI()
  console.log(theme)

  return <Box sx={{fontSize: [5], color: 'primary'}}>
    This is primary too
  </Box>
}

export default Primary
