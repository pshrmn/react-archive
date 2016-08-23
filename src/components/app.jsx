import React from 'react';
import { connect } from 'react-redux';
import Annotater from './annotater';
import RecipeMenu from './recipemenu';
import Header from './header';

export default function App(props) {
  return (
    <div className='app'>
      <Header />
      <div>
        <RecipeMenu />
        <Annotater />
      </div>
    </div>
  );
}