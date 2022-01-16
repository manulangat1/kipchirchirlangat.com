import { Container, Grid , Typography} from '@mui/material'
import React, { Fragment } from 'react'

const  Projects = () => {
    return (
        <Fragment >
            <Container maxWidth='xl' style={{padding:'2rem'}}>
            <Grid spacing={2} container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='h6'>Hey</Typography>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={6}>
                        <Typography variant='h6'>Hey</Typography>
                    </Grid>
                    
                </Grid>            
            </Container>
        </Fragment>
    )
}

export default Projects
