import { Button } from "@mui/material";
import styles from "../../../styles/Home/Home.module.css";
import TableList from "./Table";

export default function MusicList() {
  return (
    <div className={styles.musicBox}>
      <TableList />
      <div>
      <Button variant="contained" color="primary">
        Save list
      </Button>
      </div>
      
    </div>
  );
}
