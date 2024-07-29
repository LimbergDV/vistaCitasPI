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
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { fetchData } from "../../fetchData";

const token = localStorage.getItem("token");
const url = import.meta.env.VITE_URL_BASE;

function formatDateTime(dateTime) {
  const date = new Date(dateTime);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const second = String(date.getUTCSeconds()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

  return formattedDate;
}

const columns = [
  { id: "paciente", label: "Paciente", minWidth: 170 },
  { id: "monto", label: "Monto", minWidth: 170 },
  { id: "fechaPago", label: "Fecha de pago", minWidth: 170 },
];

export default function TableHistorialPagos({ active, setActive }) {
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
        const response = await fetch(`${url}/sales/getAll/`, options);
        const data = await response.json();
        console.log("Fetched data:", data); 
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

  useEffect(() => {
    if (active) {
      const doc = new jsPDF();

      const header = ["Paciente", "Monto", "Fecha del cobro"];
      const data = rows.map((pago) => [
        `${pago.nombre} ${pago.apellidoP} ${pago.apellidoM}`,
        `$${pago.monto}`,
        formatDateTime(pago.fecha_pago),
      ]);

      doc.text("Historial de Ventas", 95, 20);

      doc.autoTable({
        startY: 30,
        head: [header],
        body: data,
      });
      
      doc.save("Historial.pdf");
      setActive(false); // Reset active state to prevent multiple PDF creation
    }
  }, [active, rows, setActive]);

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
                    backgroundColor: "#C2BEBE", fontWeight: 'bold'
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={data.id_pago}
                  >
                    <TableCell>{`${data.nombre} ${data.apellidoP} ${data.apellidoM}`}</TableCell>
                    <TableCell>${data.monto}</TableCell>
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
