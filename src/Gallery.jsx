import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["search-images", searchTerm],
    queryFn: () => axios.get(`${url}&query=${searchTerm}`),
  });
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was en error....</h4>
      </section>
    );
  }
  const results = data.data.results;
  console.log(results);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
