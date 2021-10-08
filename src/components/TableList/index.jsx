import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext, useEffect, useState } from "react";
import { MusicListContext } from "../../contexts/MusicList";

function createData(date, category, city, temperature) {
  const { savedMusicList } = useContext(MusicListContext);

  const arrList = [];

  function getList() {
    savedMusicList.map((item) => {
      arrList.push(item.list);
    });
  }

  getList();

  return {
    date,
    category,
    city,
    temperature,

    history: [arrList],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  console.log(row.history);

  function renderTable() {
    return row.history?.map((array) =>
      array?.map((arrays) => {
        return arrays.map((item) => {
          return (
            <TableRow key={item.artist.name}>
              <TableCell component="th" scope="row">
                {item.artist.name}
              </TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          );
        });
      })
    );
  }

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.city}</TableCell>
        <TableCell align="center">{row.temperature} °C</TableCell>
        <button>x</button>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Artist</TableCell>
                    <TableCell>Music</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{renderTable()}</TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function TableList() {
  const [currentRows, setCurrentRows] = useState([]);

  const { savedMusicList } = useContext(MusicListContext);
  useEffect(() => {
    const arrRows = currentRows || [];
    savedMusicList.map((item) => {
      const objRows = {
        date: item.date,
        category: item.category,
        city: item.city,
        temperature: item.temperature,
      };

      arrRows.push(objRows);
    });

    setCurrentRows(arrRows);
  }, [savedMusicList]);

  function createRows() {
    const arrRows = [];

    currentRows.map((item) => {
      arrRows.push(
        createData(item.date, item.category, item.city, item.temperature)
      );
    });

    return arrRows;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Temperature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows().map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
