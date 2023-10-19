import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const CustomTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell className='head'>#</TableCell>
      <TableCell className='head'>Icon</TableCell>
      <TableCell className='head'>Name</TableCell>
      <TableCell className='head'>Current Price</TableCell>
      <TableCell className='head'>Last Reload</TableCell>
      <TableCell className='head'>Market Cap</TableCell>
      <TableCell className='head'>Circulating Supply</TableCell>
    </TableRow>
  </TableHead>
);

export { CustomTableHead };
