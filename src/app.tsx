import { AuthContext } from "context/auth.context";
import { PokemonsContext } from "context/pokemons.context";
import { useAuth } from "hooks/auth.hook";
import { usePokemons } from "hooks/pokemons.hook";
import { Router } from "./router";

export const App = () => {
  const auth = useAuth();
  const pokemons = usePokemons();
  return (
    <AuthContext.Provider value={{ ...auth }}>
      <PokemonsContext.Provider value={{ ...pokemons }}>
        <Router />
      </PokemonsContext.Provider>
    </AuthContext.Provider>
  );
};
