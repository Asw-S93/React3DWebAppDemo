import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import Draggable from "react-draggable";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  const getPokemonImage = (pokemonId) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemonList.map((pokemon, index) => (
        <Draggable key={index}>
          <Card
            style={{
              width: 200,
              margin: 16,
              borderRadius: 10,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={getPokemonImage(index + 1)}
                alt={pokemon.name}
                title={pokemon.name}
                style={{ pointerevents: "none" }}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {pokemon.name}
                </Typography>
                <Typography color="text.secondary">{`#${
                  index + 1
                }`}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                size="medium"
                color="success"
                onClick={() => console.log(pokemon.name)}
              ></Button>
            </CardActions>
          </Card>
        </Draggable>
      ))}
    </div>
  );
};

export default PokeList;
