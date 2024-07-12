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
  { id: 'nombrePaciente', label: 'Nombre del paciente', minWidth: 170 },
  { id: 'fecha', label: 'Fecha de emisión', minWidth: 170 },
  { id: 'actions', label: 'Acciones', minWidth: 170},
];
const initialRows = [
  { id: 1, nombre: 'Alexis Leonel Guzmán González', fecha: "20/05/2005"},
];
export default function TableHistorialResultados() {
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
                    <TableCell>{row.fecha}</TableCell>
                    <TableCell>
                      <Button onClick> <MdLocalPrintshop /> Imprimir </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}