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
];

const Alumni = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-screen-lg mx-auto px-3">
      <div className="pt-6 pb-6 space-y-2 md:space-y-5">
        <p className="text-3xl leading-7 tracking-tight text-gray-600  dark:text-gray-400 sm:text-4xl md:text-4xl">
          Our Alumni
        </p>
      </div>
      <div className="container py-8">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Occupation</TableCell>
                <TableCell align="right">Qualification</TableCell>
                <TableCell align="right">Year of completion</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">
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
                  <TableCell align="right">{row.Occupation}</TableCell>
                  <TableCell align="right">{row.Qualification}</TableCell>
                  <TableCell align="right">{row.Year_of_Completion}</TableCell>
                  <TableCell align="right">{row.Course}</TableCell>
                  <TableCell align="right">
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
