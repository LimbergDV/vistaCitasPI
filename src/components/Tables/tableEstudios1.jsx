import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

// Métodos POST usados en la página
const token = localStorage.getItem("token");
const url = import.meta.env.VITE_URL_BASE;

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 170 },
  { id: "clave", label: "Clave de estudios", minWidth: 170 },
  { id: "descripcion", label: "Descripción", minWidth: 170 },
  { id: "precio", label: "Precio", minWidth: 170 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];

export default function TableEstudios1(params) {
  const { id_categoria } = params;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchDataForDate = async () => {
    const response = await fetch(
      `${url}/analysis/allCategory/${parseInt(id_categoria)}`,
      options
    );
    const data = await response.json();
    return data;
  };

  const [rows, setRows] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [buttonState, setButton] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataForDate();
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

    //Saber cuáles analisis ya estan en cotizacion
    const agregados = async () => {
      //Eliminar de cotizacion
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_usuario: 2, //ID del usuario en la secion, hacer dinamico una vez hecho el componente login
        }),
      };

      const response = await fetch(`${url}/price/getID/`, options);
      if (response.ok) {
        const analisis = await response.json();

        analisis.map((analisis) => {
          setButton((prevState) => ({
            ...prevState,
            [analisis.id_analisis]: true,
          }));
        });
      }
    };

    getData();
    agregados();
  }, []);

  const filteredRows = rows.filter((row) => {
    return (
      row.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      row.clave_estudios.toString().includes(filterText.toLowerCase()) ||
      row.precio.toString().includes(filterText.toLowerCase())
    );
  });

  const deletePrice = async (id_analisis) => {
    // Eliminar de cotización
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await fetch(`${url}/price/delete/${id_analisis}/2`, options);//Modificar el id de usuario
    if (response.ok) {
      console.log("exito");
      setButton((prevState) => ({
        ...prevState,
        [id_analisis]: false,
      }));
    } else {
      console.error("Error al eliminar el análisis");
    }
  };
  

  const addPrice = async (analisis) => {
    //Añadir a cotizacion
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_analisis: analisis,
        id_usuario: 2, //ID del usuario en la secion, hacer dinamico una vez hecho el componente login
      }),
    };

    const response = await fetch(`${url}/price/add/`, options);
    if (response.ok) {
      console.log("exito");
      setButton((prevState) => ({
        ...prevState,
        [analisis]: true,
      }));
    }
  };

  //modificar boton de agregar cotización
  const handleOpenAddModal = (id_cita) => {
    setSelectedUserId(id_cita);
    setDeleteModalOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <Paper sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <TableContainer sx={{ width: "100%", height: "100vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((analisis) => {
                  const isButtonActive = buttonState[analisis.id_analisis];
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={analisis.id_analisis}
                    >
                      <TableCell>{analisis.nombre}</TableCell>
                      <TableCell>{analisis.clave_estudios}</TableCell>
                      <TableCell>{analisis.descripcion}</TableCell>
                      <TableCell>${analisis.precio}</TableCell>
                      <TableCell>
                        {isButtonActive ? (
                          <Button
                            onClick={() => deletePrice(analisis.id_analisis)}
                          >
                            Eliminar
                          </Button>
                        ) : (
                          <Button
                            onClick={() => addPrice(analisis.id_analisis)}
                          >
                            Agregar
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
