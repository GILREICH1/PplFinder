import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const favoritesContext = React.createContext({});

const AppRouter = () => {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const localFavorites = localStorage.getItem("favorites") || [];
    setFavorites(JSON.parse(localFavorites));
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <favoritesContext.Provider value={{ favorites, setFavorites }}>
          <NavBar />
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/" component={Home} />
          </Switch>
        </favoritesContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export { favoritesContext };
export default AppRouter;
