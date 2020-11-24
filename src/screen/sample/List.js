import React from 'react';
import {FormControl, NativeSelect, InputLabel} from '@material-ui/core'


export default function List({handleChange, classes}) {
  //const classes = useStyles();

  return (
    <div className={classes.container}>
        <FormControl className={classes.formControl}>
            <InputLabel id="_id">Cultivo</InputLabel>
            <NativeSelect name="_id" defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value=""></option>
                <option value="10">Arroz</option>
            </NativeSelect>
        </FormControl>
    </div>
  )
}