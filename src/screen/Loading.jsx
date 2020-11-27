import React from 'react';
import { WaveLoading } from 'react-loadingg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loading: {
        position: 'relative',
        top: '50%',
        left : '50%',
        transform: 'translate(-50%, -50%)',
        padding: theme.spacing(2, 4, 3),
    }
}));
const Loading = ({show}) => {
    const classes = useStyles();
    const loading = (
        <div className={classes.loading}>
            <WaveLoading />    
        </div>
    )
    return (
        show === true ? loading : null
    )
}

export default Loading;