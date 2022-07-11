import { getPokemons } from "api/pokemon.api";
import { useState } from "react"
import { toast } from "react-toastify";
import { PokemonShortData } from "types";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<[] | PokemonShortData[]>([]);
  const [count, setCount] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const loadPokemons = async (limit: number, offset: number) => {
    try {
      if (count && pokemons.length < count) {
        return
      }
      setIsLoading(true);
      const res = await getPokemons(limit, offset);
      setPokemons(res.data.results);
      setCount(res.data.count);
      toast.success("Load success");

    }
    catch (e) {
      toast.error("Load fail")
      setError("Load Error")
    }
    finally {
      setIsLoading(false);
    }
  }
  return { pokemons, loadPokemons, count, isLoading, error };
}