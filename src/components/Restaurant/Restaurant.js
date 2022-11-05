import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Restaurant = () => {
  const meals = useLoaderData();
  console.log( meals.meals );
  return (
    <div>
      <h2>This is Restaurant Page!!</h2>
      <p>{ meals.meals.lenght } meals found!!</p>
    </div>
  );
};

export default Restaurant;