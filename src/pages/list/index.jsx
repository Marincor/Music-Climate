import Header from "../../components/Header";
import TableList from "../../components/TableList";
import styles from '../../styles/SavedList/List.module.css'
export default function List () {


    return(

        <body className={styles.box}>
            <Header />
            <div className={styles.boxTable}>
                <TableList />
            </div>
        </body>
    )
}