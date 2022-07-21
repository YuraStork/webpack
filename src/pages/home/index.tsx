import { Container } from "components/container/styles";
import { FileInput } from "components/fileInput";
import { PokemonsContext } from "context/pokemons.context";
import { useContext, useEffect } from "react";
import { HomeSection, Card, CardsWrapper } from "./styles";

export const HomePage = () => {
  const { count, loadPokemons, pokemons, error, isLoading } = useContext(PokemonsContext)

  // useEffect(() => {
  //   loadPokemons(10, 0);
  // }, [])

  return (
    <HomeSection>
      <Container>
        {/* {
          isLoading && <h1 style={{ color: "red" }}>loading...</h1>
        }
        {
          error && <div>{error}</div>
        }
        <CardsWrapper>
          {
            pokemons.map((pok) => <Card key={pok.url}><div>{pok.name}</div><div>side</div></Card>)
          } */}
        {/* </CardsWrapper> */}
      </Container>
    </HomeSection>
  );
};
