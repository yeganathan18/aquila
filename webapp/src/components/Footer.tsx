import * as React from 'react';
import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
      {'Built by '}
      <Link color="primary" className="no-underline" href="https://mui.com/">
        Syncrolaze
      </Link>{' '}
    </Typography>
  );
}

const footers = [
  {
    title: 'Information',
    description: [
      { name: 'Admission', link: '/admission' },
      { name: 'Co-curricular', link: '/co-curricular' },
      { name: 'Campus', link: '/campus' },
      { name: 'Exam Result', link: '/exam-result' },
    ],
  },
  {
    title: 'Useful Links',
    description: [
      { name: 'About us', link: '/about' },
      { name: 'History', link: '/history' },
      { name: 'Committee Members', link: '/committee-members' },
      { name: 'Gallery', link: '/gallery' },
    ],
  },
  {
    title: 'Other Links',
    description: [
      { name: 'Blogs', link: '/blogs' },
      { name: 'Alumni', link: '/alumni' },
      { name: 'PTA', link: '/pta' },
    ],
  },
  {
    title: 'Contact Info',
    description: [
      { name: 'Privacy policy', link: '/privacy-policy' },
      { name: 'Terms of use', link: '/terms-of-use' },
    ],
  },
];

const Footer = () => {
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
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      variant="subtitle1"
                      underline="none"
                      color="#3399ff"
                      fontWeight="700"
                    >
                      {item.name}
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

export default Footer;
