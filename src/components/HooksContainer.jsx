import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { countMinus } from "../redux";

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

const HooksContainer = (props) => {
  const count = useSelector((state) => state.countRed.count);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" variant="h5">
          Redux Hook
        </Typography>
        <Typography variant="h4">Count is : {count}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => dispatch(countMinus())}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
};
export default HooksContainer;

// const mapStateToProps = (state) => {
//   return { count: state.count };
// };
// const mapDispatchToProps = (dispatch) => {
//   return { countMinus: () => dispatch(countMinus()) };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(HooksContainer);
