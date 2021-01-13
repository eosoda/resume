import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portifolio from "./pages/Portifolio/Portifolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container className={'top_66'}>
      <Grid container spacing={7}>
        <Grid item xs={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
          <Header />
            <Switch>
              <Route path="/portifolio">
                <Portifolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
