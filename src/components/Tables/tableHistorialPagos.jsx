import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { MdLocalPrintshop } from "react-icons/md";

const token = import.meta.env.VITE_TOKEN;
const url = import.meta.env.VITE_URL_BASE;

function formatDateTime(dateTime) {
   // Crear un objeto Date a partir de la cadena de fecha
   const date = new Date(dateTime);

   // Obtener los componentes de la fecha
   const day = String(date.getUTCDate()).padStart(2, '0');
   const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
   const year = date.getUTCFullYear();
   
   // Obtener los componentes de la hora
   const hour = String(date.getUTCHours()).padStart(2, '0');
   const minute = String(date.getUTCMinutes()).padStart(2, '0');
   const second = String(date.getUTCSeconds()).padStart(2, '0');

   // Formatear la fecha y hora en el nuevo formato
   const formattedDate = `${day}/${month}/${year} -- ${hour}:${minute}:${second}`;

   return formattedDate;
}

const columns = [
  { id: "paciente", label: "Paciente", minWidth: 170 },
  { id: "monto", label: "Monto", minWidth: 170 },
  { id: "fechaPago", label: "Fecha de pago", minWidth: 170 },
];

export default function TableHistorialPagos() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${url}/sales/getAll/`,
          options
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data for debugging
        if (Array.isArray(data)) {
          setRows(data);
          setRowsPerPage(data.length);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <Paper
      sx={{ width: "70%", overflow: "hidden", backgroundColor: "#C2BEBE" }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#C2BEBE",
                  }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.id_pago}>
                    <TableCell>{`${data.nombre} ${data.apellidoP} ${data.apellidoM}`}</TableCell>
                    <TableCell>{data.monto}</TableCell>
                    <TableCell>{formatDateTime(data.fecha_pago)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
