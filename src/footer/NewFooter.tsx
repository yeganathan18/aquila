/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line import/order
// eslint-disable-next-line import/order

type ICopyWriteProps = {
  children: ReactNode;
  sx?: object;
};

function Copyright(props: ICopyWriteProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Syncrolaze
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Information',
    description: ['Admission', 'Co-curricular', 'Campus', 'Exam Result'],
  },
  {
    title: 'Useful Links',
    description: ['About us', 'History', 'Committee Members', 'Gallery'],
  },
  {
    title: 'Other Links',
    description: ['Blogs', 'Alumni', 'PTA'],
  },
  {
    title: 'Contact Info',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const NewFooter = () => {
  // @ts-ignore
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      underline="none"
                      color="#3399ff"
                      fontWeight="700"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        {/* @ts-ignore */}
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default NewFooter;
