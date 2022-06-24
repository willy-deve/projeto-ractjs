import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import img1 from '../../assets/image/web1.png'
import img2 from '../../assets/image/web2.png'
import img3 from '../../assets/image/web3.png'

const SectionDois = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <Paper
            elevation={4}
            sx={{
              padding: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={img1} alt="" width="300px" height="300px" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quasi voluptatum officiis. Quo alias molestias sapiente voluptate
              magnam a omnis, voluptatibus, facere repellat similique neque.
              Labore mollitia nihil beatae rerum.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper elevation={4}>
            <img src={img2} alt="" width="300px" height="300px" />
            <Typography>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quasi voluptatum officiis. Quo alias molestias sapiente voluptate
              magnam a omnis, voluptatibus, facere repellat similique neque.
              Labore mollitia nihil beatae rerum.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper elevation={4}>
            <img src={img3} alt="" width="300px" height="300px" />
            <Typography>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quasi voluptatum officiis. Quo alias molestias sapiente voluptate
              magnam a omnis, voluptatibus, facere repellat similique neque.
              Labore mollitia nihil beatae rerum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionDois
