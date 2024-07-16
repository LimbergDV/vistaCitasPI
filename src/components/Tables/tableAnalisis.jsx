import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'clave', label: 'Clave de estudios', minWidth: 170 },
  { id: 'descripcion', label: 'Descripcion', minWidth: 170},
  { id: 'costo', label: 'Costo', minWidth: 170},
  { id: 'acciones', label: 'Acciones', minWidth: 170},
];

const initialRows = [
    { id: 1, nombre: 'Estudio de sangre', clave: "123", descripcion: "saca sangre", costo: "$"+"130" },
  ];

export default function TableHistorialResultados() {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', backgroundColor: '#C2BEBE', overflowX: 'auto' }}>
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
                    <TableCell>{row.clave}</TableCell>
                    <TableCell>{row.descripcion}</TableCell>
                    <TableCell>{row.costo}</TableCell>
                    <TableCell>
                      <Button> <FaRegEdit /> Editar </Button>
                      <Button> <FaTrashAlt /> Eliminar </Button>
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