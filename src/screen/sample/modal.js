import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons'
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import List from './List'

const useStyles = makeStyles((theme) => ({
    paper: {
        position : 'absolute',
        width : '40%',
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
    customButton: {
      margin: theme.spacing(1),
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
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      //thousandSeparator
      isNumericString
      //prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function trigger(dataEntry, handleClose, e){
  dataEntry();
  handleClose();
}

export default function SimpleModal({ handleChange, crops, dataEntry, open, handleClose, data, _id }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const body = (
    <div className={classes.paper}>
        <h3 id="simple-modal-title">New sample</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <List handleChange = { handleChange } classes = { classes } crops={crops} _id={data ? data.crop : null}/>
            <br />
            <TextField id="nitrogen" name="nitrogen" label="nitrogen" className={classes.formControl} 
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.nitrogen : null}
            />
            <br />
            <TextField id="phosphorus" name="phosphorus" label="phosphorus" className={classes.formControl} 
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.phosphorus : null}
            />
            <br />
            <TextField id="potassium" name="potassium" label="potassium" className={classes.formControl}
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.potassium : null}
            />
            <br />
            <TextField id="sulfur" name="sulfur" label="sulfur" className={classes.formControl} 
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.sulfur : null}
            />
            <br />
            <TextField id="calcium" name="calcium" label="calcium" className={classes.formControl} 
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.calcium : null}
            />
            <br />
            <TextField id="magnesium" name="magnesium" label="magnesium" className={classes.formControl} 
              InputProps={{
                inputComponent:NumberFormatCustom
              }}
              onChange={handleChange}
              value={data ? data.magnesium : null}
            />
            <br/>
            <Button
                variant="contained"
                color="default"
                className={classes.customButton}
                endIcon={<Save/>}
                onClick={() => trigger(dataEntry, handleClose)}
                pb={500}
            >
                Guardar
            </Button>
        </form>
    </div>
  );

  return (
    <div>
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