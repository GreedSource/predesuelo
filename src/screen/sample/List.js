import React from 'react';
import {FormControl, NativeSelect, InputLabel} from '@material-ui/core'

export default function List({handleChange, classes, crops, _id}) {
  return (
    
    <div className={classes.container}>
        <FormControl className={classes.formControl}>
            <InputLabel id="crop">Cultivo</InputLabel>
            <NativeSelect name="crop" value={_id ? _id : ''} onChange={handleChange}>
                <option key="_1" value={null}></option>
                {crops.map((item, index) => 
                  <option key={item._id} value={item._id}>{item.name}</option>
                )}
            </NativeSelect>
        </FormControl>
    </div>
  )
}