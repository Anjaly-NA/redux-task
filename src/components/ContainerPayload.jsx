import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { countMinus } from "../redux";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ContainerPayload = (props) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(1);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" variant="h5">
          Redux
        </Typography>
        <Typography variant="h4">Pay load Count is : {props.count}</Typography>
        <form className={classes.root}>
          <TextField
            id="standard-basic"
            label="Standard"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => props.countMinus(inputValue)}
        >
          Update by {inputValue}
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return { count: state.countRed.count };
};
const mapDispatchToProps = (dispatch) => {
  return { countMinus: (inputValue) => dispatch(countMinus(inputValue)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContainerPayload);
