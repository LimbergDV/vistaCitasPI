//Molécula
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const token = localStorage.getItem("token");
const id_usuario = parseInt(localStorage.getItem("id_usuario"));
const url = import.meta.env.VITE_URL_BASE;

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 170 },
  { id: "precio", label: "Precio", minWidth: 170 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];

export default function TableCotizacionUser({ onTotal }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();

  const agregados = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_usuario: id_usuario, //Modificar
      }),
    };

    try {
      const response = await fetch(`${url}/price/getAll/`, options);
      if (response.ok) {
        const analisis = await response.json();
        setData(analisis);
        setRowsPerPage(analisis.length);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    agregados();
  }, []);

  useEffect(() => {
    calculateTotal(data);
  }, [data]);

  const calculateTotal = (data) => {
    let total = 0.0;
    if (Array.isArray(data)) {
      data.forEach((analisis) => {
        total += parseFloat(analisis.precio);
      });
    }
    onTotal(total.toFixed(2));
  };

  const deletePrice = async (id_analisis) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      `${url}/price/delete/${id_analisis}/${id_usuario}`,
      options
    );
    if (response.ok) {
      setData((prevData) => {
        const newData = prevData.filter(
          (row) => row.id_analisis !== id_analisis
        );
        calculateTotal(newData);
        return newData;
      });
    } else {
      console.error("Error al eliminar el análisis");
    }
  };

  return (
    <Paper
      sx={{
        width: "55%",
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((analisis) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={analisis.id_analisis}
                  >
                    <TableCell>{analisis.nombre}</TableCell>
                    <TableCell>${analisis.precio}</TableCell>
                    <TableCell>
                      <Button onClick={() => deletePrice(analisis.id_analisis)}>
                        Eliminar
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
