import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import PersonList from './Components/PersonList';
import PokemonList from './Components/PokemonList';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;







function App() {
  return (
    <div>
      <PokemonList />

    </div>
  );
}

export default App;
