import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Grid";

const posts = [
    {
        title: 'Home',
        date: '19-09-2002',
        description: 'lorem ipsum'
    },
    {
        title: 'Home 2',
        date: '04-09-2002',
        description: 'lorem ipsum'
    },
];

const IntroSection = () => {
    return (
        <Container disableGutters maxWidth="full" component="main" sx={{backgroundColor: '#1b263b'}}>
            {/*<Grid container columns={{xs: 4, sm: 8, md: 12}}>*/}
            {/*    {*/}
            {/*        posts.map((post) => (*/}
            {/*            <Grid key={post.title} xs={6} md={6} px={4} py={4}>*/}
            {/*                <Card sx={{display: 'flex'}}>*/}
            {/*                    <CardContent sx={{flex: 1}}>*/}
            {/*                        <Typography component="h2" variant="h5">*/}
            {/*                            {post.title}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="subtitle1" color="text.secondary">*/}
            {/*                            {post.date}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="subtitle1" paragraph>*/}
            {/*                            {post.description}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography variant="subtitle1" color="primary">*/}
            {/*                            Continue reading...*/}
            {/*                        </Typography>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            </Grid>))*/}
            {/*    }*/}
            {/*</Grid>*/}
            <Grid container columns={{xs: 4, sm: 8, md: 12}} direction={"row"}>
                <Grid xs={6} md={6} px={4} py={4}>
                    <Card>
                        <CardContent>
                            <Typography component="h2" variant="h4">
                                About
                            </Typography>
                            <Typography variant="subtitle1" paragraph py={2}>
                                National School is run along the lines of the best school´s in the Kerala´s educational
                                practices. It provides a cutting edge academic programme with state of the art
                                infrastructure and facilities for not just the gifted but any upwardly mobile Kerala
                                students here, students acquire an excellent education in a rich kerala context, grow up
                                rooted in our core values and graduate to take on the changing world´s
                                challenging demands as they pursue higher studies in top universities in India and
                                worldwide. This is what sets the school apart in the growing milieu of international
                                schools.
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*<Grid xs={6} md={6} px={4} py={4} item>*/}
                {/*    <Grid>*/}
                {/*        <Card>*/}
                {/*            <CardContent>*/}
                {/*                <Typography component="h2" variant="h6">*/}
                {/*                    Our Vision*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="subtitle1" paragraph>*/}
                {/*                    It is our vision to create a generation of Good people with cultural values,*/}
                {/*                    indomitable*/}
                {/*                    intelligence and ultimately a good human being.*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*        </Card>*/}
                {/*        <Card>*/}
                {/*            <CardContent>*/}
                {/*                <Typography component="h2" variant="h6">*/}
                {/*                    Our Mission*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="subtitle1" paragraph>*/}
                {/*                    Our mission is Learn, Love, Lead for the progressive needs of the nation.*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*        </Card>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
        </Container>
    )
}

export default IntroSection;