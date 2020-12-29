import React from 'react'
import { useThemeUI, Box } from 'theme-ui'

const Hook = () => {
  const { theme } = useThemeUI()

  return <Box>
    <Box sx={{fontSize: [5]}}>
      This is from the theme via a hook:
    </Box>
    <Box>
      {theme.fontSizes.join(',')}
    </Box>
  </Box>
}

export default Hook
