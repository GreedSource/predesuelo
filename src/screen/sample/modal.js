import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons'
import List from './List'

const useStyles = makeStyles((theme) => ({
    paper: {
        position : 'absolute',
        width : '400',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5], 
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left : '50%',
        transform: 'translate(-50%, -50%)'
    },
    button: {
        margin: theme.spacing(1)
    },
    '& > *': {
        margin: theme.spacing(2),
        width: '100%',
    },
    formControl: {
        width: "100%",
        marginBottom: "3px !important"
      },
      container:  {
        display: "flex",
        "justify-content": "center",
        margin: "0 auto",
     }
}));
export default function SimpleModal({ handleChange }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
        <h3 id="simple-modal-title">New sample</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <List handleChange = { handleChange } classes = { classes }/>
            <br />
            <TextField id="name" label="name" />
        </form>
    </div>
  );

  return (
    <div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Add/>}
            onClick={handleOpen}
            pb={500}
        >
            Add
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </div>
  );
}