// DO NOT DELETE

import * as React from 'react'
import './App.css';
import { Header } from './Header.js';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <DogListContainer />
      <Description />
    </div>
  )
}
