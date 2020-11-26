import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    }
}));

export default function SimpleButton({ handleOpen }) {
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