import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { MusicListContext } from "../../../../contexts/MusicList";
import { WeatherContext } from "../../../../contexts/Weather";
import changeGenre from "../../../functions/Genre/changeGenre";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableList() {
  const { musicList, genre, setGenre } = useContext(MusicListContext);
  const { currentWeather } = useContext(WeatherContext);

  useEffect(() => {
    const temperature = currentWeather?.temperature;
    setGenre(changeGenre(temperature));
  }, [currentWeather]);


  
  function renderTable() {
    if (musicList !== undefined) {
      return musicList.map((music) => {
        return (
          <TableRow
            key={music.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {music.artist.name}
            </TableCell>
            <TableCell align="center">{music.name}</TableCell>
            <TableCell align="center">{genre}</TableCell>
          </TableRow>
        );
      });
    } else {
      return <p>loading soon...</p>;
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5" component="h2">
                {" "}
                Artist
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h5" component="h2">
                {" "}
                Music
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5" component="h2">
                {" "}
                Genre
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTable()}</TableBody>
      </Table>
    </TableContainer>
  );
}
