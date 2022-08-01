import * as React from 'react';

import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const content = [
  {
    TeacherName: 'Dr. S.K. Gupta',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
  {
    TeacherName: 'Dr. Rajesh Kumar',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
  {
    TeacherName: 'Dr. Rajesh Kumar',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
  {
    TeacherName: 'Dr. Rajesh Kumar',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
  {
    TeacherName: 'Dr. Rajesh Kumar',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
  {
    TeacherName: 'Dr. Skanda Kumar',
    Dept: 'Department of Computer Science & Engineering',
    Image: '/assets/images/teacher.jpeg',
  },
]

const Pta = () => {
  return (
    <div className="divide-y divide-gray-20 max-w-screen-lg mx-auto px-3">
      <div className="pt-6 pb-6 space-y-2 md:space-y-5">
        <p className="text-3xl leading-7 tracking-tight text-gray-600 sm:text-4xl md:text-3xl">
          PTA
        </p>
      </div>
      <div className="container py-8">
        <div className="flex flex-wrap -m-4">
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              justifyContent="space-evenly"
              rowSpacing={4}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {
                content.map((item) => (
                  <Grid item key={item.TeacherName}>
                    <Card sx={{ maxWidth: 300 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.Image}
                          alt="photo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.TeacherName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.Dept}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pta;
