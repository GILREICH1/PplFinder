import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const favoritesContext = React.createContext({});

const AppRouter = () => {
  const [favorites, setFavorites] = React.useState([]);

  function addToFavorites(user) {
    const newFavs = [...favorites, user];
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  }
  function removeFromFavorites(user) {
    const newfavorites = favorites.filter((fav) => fav.login.uuid !== user.login.uuid);
    setFavorites(newfavorites);
    localStorage.setItem("favorites", JSON.stringify(newfavorites));
  }

  React.useEffect(() => {
    const localFavorites = localStorage.getItem("favorites") || [];
    setFavorites(JSON.parse(localFavorites));
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <favoritesContext.Provider
          value={{ favorites, setFavorites, addToFavorites, removeFromFavorites }}
        >
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
