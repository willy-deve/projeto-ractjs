import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

const Avatares = () => {
  return (
    <div>
      <Typography variant="h4" align="center">
        {' '}
        Conheça nosso time
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </div>
  )
}

export default Avatares
