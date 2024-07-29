import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 10 },
  { id: 'actions', label: 'Acciones', minWidth: 10},
];

export default function TableSearchUser({data}) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  useEffect(() => {
    if (Array.isArray(data)) {
      setRows(data);
      setRowsPerPage(data.length);
    } else {
      console.error("Data fetched is not an array:", data);
    }
  }, [data]);

  const showAlert = (nombre) => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: `Se agregó a ${nombre}`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  console.log(data);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#C2BEBE' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#C2BEBE', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.id_usuario}>
                    <TableCell>{`${data.nombre} ${data.apellidoP} ${data.apellidoM}`}</TableCell>
                    <TableCell>
                      <Button onClick={() => showAlert(data.nombre)}>Añadir</Button>
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
