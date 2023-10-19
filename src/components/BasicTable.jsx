import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { CustomTableHead } from './CustomTableHead';
import { TableRows } from './TableRows';

const BasicTable = ({ coins }) => (
  <TableContainer
    component={Paper}
    style={{ borderRadius: '0' }}>
    <Table
      stickyHeader
      sx={{ minWidth: 650 }}
      style={{ background: '#ededed' }}
      aria-label='simple table'>
      <CustomTableHead />
      <TableBody>
        <TableRows coins={coins} />
      </TableBody>
    </Table>
  </TableContainer>
);

export { BasicTable };
