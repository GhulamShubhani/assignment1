import { Grid, Typography } from '@mui/material'
import React from 'react'

const Topbar = () => {
  return (
    <>
    <Grid container>
    <Grid item xs={12} md={12} sx={{
                // width: '100%',
                height: '52px',
                flexShrink: 0,
                background: '#C2278E',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
        <Typography variant='body1' sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontFamily: 'Montserrat Alternates',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    lineHeight: '24px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                }}>Turning Uncertainity Into your advantage</Typography>
        </Grid>
    </Grid>
    </>
  )
}

export default Topbar