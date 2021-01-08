import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight:200,
    height:200,
    overflow:'auto'
  },
  container: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(5, 15),
  },
}));

const User = ({ fetchUser, userData, userLoading, userError }) => {
  //fetchUsers function is destructured from the props
  const classes = useStyles();
  useEffect(() => {
    fetchUser();
  }, []); //empty array to call fetchUsers only once
  return userLoading ? (
    <h5>loading</h5>
  ) : userError ? (
    <h4>error {userError}</h4>
  ) : (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {userData.map((user, index) => (
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography color="textPrimary" variant="h5">
                  User : {index + 1}
                </Typography>
                <Typography variant="h4">{user.name} </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  {user.username}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.userRed.users,
    userLoading: state.userRed.loading,
    userError: state.userRed.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchUser: () => dispatch(fetchUsers()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
