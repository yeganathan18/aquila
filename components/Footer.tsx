import * as React from 'react';
import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
      <Link color="primary" className="no-underline" href="https://github.com/yeganathan18/aquila">
        THC
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
      <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Link href='/'>
          About
        </Link>
        <Link href='/'>
          Gallery
        </Link>
        <Link href='/'>
          Alumni
        </Link>
        <Link href='/'>
          Contact
        </Link>
      </Box>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
