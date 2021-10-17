import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'

const Create = () => {
    return (
        <Container>
          
        
            <Typography 
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <Button 
                type="submit" 
                variant="outlined" 
                color="secondary"
            > 
                Buy Now
            </Button>
        </Container>
    );
};

export default Create;