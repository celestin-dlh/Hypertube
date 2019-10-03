import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    height: "70px",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
  },

}));

export default function Footer() {
  	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h6" style={{color: "white", textAlign: "center"}}>
            	Footer
          	</Typography>
		</div>
	)
}