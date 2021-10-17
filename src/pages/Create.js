import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Create = () => {
    return (
        <div>
            <Typography 
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <Button type="submit" variant="outlined" color="secondary"> 
                Buy Now
            </Button>

            <ButtonGroup variant="contained" color="secondary" aria-label="">
              <Button>See more</Button>
              <Button>Buy Now</Button>
              <Button>Clicked</Button>
              <Button>Filtered</Button>
              
            </ButtonGroup>
        </div>
    );
};

export default Create;