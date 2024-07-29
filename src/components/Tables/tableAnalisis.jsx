//Molécula
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
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 170 },
  { id: "clave", label: "Clave de estudios", minWidth: 170 },
  { id: "descripcion", label: "Descripcion", minWidth: 170 },
  { id: "costo", label: "Costo", minWidth: 170 },
  { id: "acciones", label: "Acciones", minWidth: 170 },
];

export default function TableAnalisis({ data, actionE, actionD }) {

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();

  useEffect(() => {
    const verifyData = () => {
      if (Array.isArray(data) && data.length != 0) {
        console.log("Si es ")
        setRows(data);
        setRowsPerPage(data.length);
      } else {
        console.log("Data fetched is not an array:", data);
      }
    };

    verifyData();
  }, [data]);



  return (
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        backgroundColor: "#C2BEBE",
        overflowX: "auto",
      }}
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
                    fontWeight: 'bold'
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
              .map((analisis) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={analisis.id_analisis}>
                    <TableCell>{analisis.nombre}</TableCell>
                    <TableCell>{analisis.clave_estudios}</TableCell>
                    <TableCell>{analisis.descripcion}</TableCell>
                    <TableCell>${analisis.precio}</TableCell>
                    <TableCell>
                      <Button onClick={()=>actionE(true)}>
                        {" "}
                        <FaRegEdit /> Editar 
                      </Button>
                      <Button onClick={()=>actionD(true)}>
                        {" "}
                        <FaTrashAlt /> Eliminar
                      </Button>
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
