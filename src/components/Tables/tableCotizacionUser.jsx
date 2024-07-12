import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { MdLocalPrintshop } from "react-icons/md";



const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'precio', label: 'Precio', minWidth: 170 },
];
const initialRows = [
  { id: 1, nombre: 'Estudio de sangre', precio: "$ "+"230"},
];
export default function TableCotizacionUser() {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  return (
    <Paper sx={{ width: '55%', overflow: 'hidden', backgroundColor: '#C2BEBE', overflowX: 'auto' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#C2BEBE' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell>{row.precio}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}