//Molécula
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
import { MdLocalPrintshop } from "react-icons/md";
import Swal from "sweetalert2";

const fecha = (dateString) => {
  // Parsear la fecha
  const date = new Date(dateString);

  // Extraer componentes de la fecha
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11
  const year = date.getUTCFullYear();

  // Formatear la fecha
  return `${day} / ${month} / ${year}`;
}

const descargar = (data) => {
  const byteArray = new Uint8Array(data.respaldo_resultado.data);
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Resultados.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

const columns = [
  { id: 'nombrePaciente', label: 'Nombre del paciente', minWidth: 170 },
  { id: 'fecha', label: 'Fecha de emisión', minWidth: 170 },
  { id: 'actions', label: 'Acciones', minWidth: 170},
];

export default function TableHistorialResultados({data}) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  useEffect(() => {
    if (Array.isArray(data)) {
      setRows(data);
      setRowsPerPage(data.length);
      if(data.length == 0) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "No se encontraron coincidencias",
          showConfirmButton: false,
          timer: 1900
        });
      }
    } else {
      console.error("Data fetched is not an array:", data);
    }
  }, [data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

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
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.id_history}>
                    <TableCell>{`${data.nombre} ${data.apellidoP} ${data.apellidoM}`}</TableCell>
                    <TableCell>{fecha(data.fecha_emicion)}</TableCell>
                    <TableCell>
                      <Button onClick={() => descargar(data)} > <MdLocalPrintshop /> Imprimir </Button>
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