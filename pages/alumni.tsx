import * as React from 'react';

import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name,
  Occupation,
  Qualification,
  Year_of_Completion,
  Course,
  Courses_studied_after_Plus_Two
) {
  return {
    name,
    Occupation,
    Qualification,
    Year_of_Completion,
    Course,
    Courses_studied_after_Plus_Two,
  };
}

const rows = [
  createData(
    'Deepak PS',
    // eslint-disable-next-line no-useless-concat
    'Technical Program\n' + 'Manager,\n' + 'Teleperformance USA',
    'Post Graduate',
    2007,
    'Computer Science',
    'BSc.CS, MCA'
  ),
  createData(
    'Deepak PS',
    // eslint-disable-next-line no-useless-concat
    'Technical Program\n' + 'Manager,\n' + 'Teleperformance USA',
    'Post Graduate',
    2007,
    'Computer Science',
    'BSc.CS, MCA'
  ),
];

const Alumni = () => {
  return (
    <div className="divide-y divide-gray-200 max-w-screen-lg mx-auto px-3">
      <div className="pt-6 pb-6 space-y-2 md:space-y-5">
        <p className="text-3xl leading-7 tracking-tight text-gray-600 sm:text-4xl md:text-3xl">
          Our Alumni
        </p>
      </div>
      <div className="container py-8">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Occupation</TableCell>
                <TableCell align="center">Qualification</TableCell>
                <TableCell align="center">Year of completion</TableCell>
                <TableCell align="center">Course</TableCell>
                <TableCell align="center">
                  Courses studied after Plus Two
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.Occupation}</TableCell>
                  <TableCell align="center">{row.Qualification}</TableCell>
                  <TableCell align="center">{row.Year_of_Completion}</TableCell>
                  <TableCell align="center">{row.Course}</TableCell>
                  <TableCell align="center">
                    {row.Courses_studied_after_Plus_Two}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Alumni;
