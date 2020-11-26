import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {EditButton, DeleteButton} from './editButton'


function createData(_id, name, nitrogen, phosphorus, potassium, sulfur, calcium, magnesium) {
    return { _id, name, nitrogen, phosphorus, potassium, sulfur, calcium, magnesium };
}

let rows = [
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});

const appendChild = (data) => {
    rows = data.map((r, i) => createData(r._id, r.crop.name, r.nitrogen, r.phosphorus, r.potassium, r.sulfur, r.calcium, r.magnesium))
}

export default function StickyHeadTable({data, handleOpen, confirmDialog}) {
  const classes = useStyles();
  appendChild(data)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Nitrogeno</TableCell>
                <TableCell align="right">Fosforo&nbsp;(g)</TableCell>
                <TableCell align="right">Potasio&nbsp;(g)</TableCell>
                <TableCell align="right">Sulfuro&nbsp;(g)</TableCell>
                <TableCell align="right">Calcio&nbsp;(g)</TableCell>
                <TableCell align="right">Magnesio&nbsp;(g)</TableCell>
                <TableCell align="right">Opciones</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.nitrogen}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.phosphorus}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.potassium}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.sulfur}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.calcium}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {row.magnesium}
                    </TableCell>
                    <TableCell style={{ width: 150 }} align="right">
                        <EditButton handleOpen={handleOpen} _id={row._id} />
                    </TableCell>
                    <TableCell style={{ width: 150 }} align="right">
                      <DeleteButton confirmDialog={confirmDialog}  _id={row._id}/>
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
