import { createContext } from "react";
import { PokemonShortData } from "types";

type ContextProps = {
  pokemons: PokemonShortData[] | [];
  count: number | null;
  loadPokemons: (limit: number, offset: number) => void;
  isLoading: boolean;
  error: null | string;
}

export const PokemonsContext = createContext<ContextProps>({ count: null, loadPokemons: () => { }, pokemons: [], error: null, isLoading: false })