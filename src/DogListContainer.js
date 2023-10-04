// DO NOT DELETE

import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import { BreedsSelect } from "./BreedsSelect";
import { DogImage } from './DogImage';

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]) //犬の全画像を格納する配列を定義
    const [selectedBreed, setSelectedBreed] = useState('') //ドロップダウンメニューで選ばれた値を格納
    const [dogImages, setDogImages] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all") //犬の全画像API
        .then(responce =>{
            return responce.json();
        })
        .then(data =>{
            setBreeds(Object.keys(data.message));
        })}, []);

        const handleBreedChange = event => {
            setSelectedBreed(event.target.value);
        };

        const handleDogImageChange = () =>{
            if (selectedBreed) 
            { 
                fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
                .then(responce =>{
                    return responce.json();
                })
                .then(DogImage => {
                    setDogImages(DogImage.message);
                    console.log(dogImages)
                })
            }
        }

        return (
            <div>
                <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange} />
                <button onClick={handleDogImageChange}>表示</button>      
                {dogImages.map(dogImageUrl =>(
                    <DogImage key={dogImageUrl} url={dogImageUrl} />
                ))}      
            </div>
        )
}