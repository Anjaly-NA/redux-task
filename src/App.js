import "./App.css";
// import Container from "./components/Container";
// import HooksContainer from "./components/HooksContainer";
import { Provider } from "react-redux";
import store from "../src/redux/store";
// import NumberContainer from "./components/NumberContainer";
// import ContainerPayload from "./components/ContainerPayload";
// import ItemContainer from "./components/ItemContainer";
import User from "./components/User/User";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item>
            <User />
          </Grid>
          {/* <Grid item>
            <Container />
          </Grid>
          <Grid item>
            <HooksContainer />
          </Grid>
          <Grid item>
            <NumberContainer />
          </Grid>
          <Grid item>
            <ContainerPayload />
          </Grid>
          <Grid item>
            <ItemContainer count/>
          </Grid>
          <Grid item>
            <ItemContainer />
          </Grid> */}
        </Grid>
      </div>
    </Provider>
  );
}

export default App;
