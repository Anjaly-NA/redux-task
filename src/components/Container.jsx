import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { countMinus } from "../redux";
import { connect } from "react-redux";

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

const Container = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" variant="h5">
          Redux
        </Typography>
        <Typography variant="h4">Count is :  {props.count}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={props.countMinus}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return { count: state.count };
};
const mapDispatchToProps = (dispatch) => {
  return { countMinus: () => dispatch(countMinus()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
