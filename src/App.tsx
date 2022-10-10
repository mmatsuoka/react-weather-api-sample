import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

import { useState } from "react";


function App() {

  const [city, setCity] = useState<string>("");
    
  /**
   * https://www.weatherapi.com/ が提供しているAPIから天気予報を取得する。
   */
  const getWeather = (e:any) => {

      e.preventDefault();

      fetch("https://api.weatherapi.com/v1/current.json?key=420a5465eb6f4f628e0141918220910&q=London&aqi=no")
      .then(response => response.json() )
      .then(data => console.log(data))
  }

  return (
    <div className="test">
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results/>
    </div>
  );
}

export default App;
