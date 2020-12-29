import { Box, Text, Grid, IconButton } from 'theme-ui'
import { Primary, Secondary } from 'theme-ui-test-component'

function Index() {
  return (
    <Box sx={{ml: [3], mt: [3]}}>
    <Box sx={{fontSize: [5], color: 'primary'}}>
      This is primary
    </Box>
    <Box sx={{fontSize: [5], color: 'secondary'}}>
      This is secondary
    </Box>
    <Primary />
    <Secondary />
    </Box>
  )
}

export default Index
