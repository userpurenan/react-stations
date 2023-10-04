// DO NOT DELETE

import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {

    const DogBreedsList = breeds.map(breed => 
        <option key={breed}>
            {breed}
        </option>
    );

  return (
    <select value={selectedBreed} onChange={(event)=>onBreedChange(event)}>
      {DogBreedsList}
    </select>
  );
};
