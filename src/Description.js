// DO NOT DELETE
import React from 'react';

import { useState } from 'react';
import { DogImage } from './DogImage';
import './App.css'

export const Description = () => {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg") //useStateに初期値画像イメージを保存

    const ChangeImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(responce =>{
            return responce.json();
        })
        .then(data =>{
            setDogUrl(data.message);
        });
    }

    return(
        <div>
            <p className='description'>犬の画像を表示するサイトです</p>
            <DogImage url={dogUrl} />            
            <div>
                <button onClick={ChangeImage}>更新</button>
            </div>
        </div>
    )
};
