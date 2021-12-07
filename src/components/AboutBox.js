import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

const AboutBox = () => {
    return (
        <Container disableGutters maxWidth="full" component="main" sx={{pt: 8, pb: 6, backgroundColor: '#1b263b'}}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="primary"
                gutterBottom
            >
                Hello world!
            </Typography>
        </Container>
    )
}

export default AboutBox;