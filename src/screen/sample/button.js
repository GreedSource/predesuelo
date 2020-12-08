import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Add, Edit, Delete, BarChart } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    }
}));

export {
    EditButton,
    DeleteButton,
    SimpleButton,
    DefaultButton
}

function SimpleButton({ handleOpen }) {
    const classes = useStyles();
  return (
    <div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Add/>}
            onClick={() => handleOpen(null)}
            pb={500}
        >
            Add
        </Button>
    </div>
  );
}

function EditButton({ handleOpen, _id }) {
    const classes = useStyles();
  return (
    <div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Edit/>}
            onClick={() => handleOpen(_id)}
            pb={500}
        >
            Edit
        </Button>
    </div>
  );
}


function DeleteButton({ confirmDialog, _id }) {
    const classes = useStyles();
  return (
    <div>
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<Delete/>}
            onClick={() => confirmDialog(_id)}
            pb={500}
        >
            Delete
        </Button>
    </div>
  );
}

function DefaultButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={<BarChart/>}
                onClick={() => props.history.push(`/dashboard/${props._id}`) }
                pb={500}
            >
                Analize
            </Button>
        </div>
    );
}