import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/image/img1.png'

const SectionUmStyled = styled.div`
  width: 100%;
  height: 50%;
`

export const SectionUm = () => {
  return (
    <SectionUmStyled>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2">
            {' '}
            We are expert in Data Science e Analytics{' '}
          </Typography>
          <Typography variant="h5">
            {' '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            voluptatibus provident quod qui sed earum quos ipsam ea saepe iusto
            rem repellendus omnis fugiat, id officiis quam dolores neque
            voluptate?{' '}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={img1} alt="" height="540" />
        </Grid>
      </Grid>
    </SectionUmStyled>
  )
}

export default SectionUm
