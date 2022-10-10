import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

import { useState } from "react";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {

  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature:  "",
    conditionText: "",
    icon: "",
  });
    
  /**
   * https://www.weatherapi.com/ が提供しているAPIから天気予報を取得する。
   */
  const getWeather = (e:any) => {

      e.preventDefault();

      fetch(`https://api.weatherapi.com/v1/current.json?key=420a5465eb6f4f628e0141918220910&q=${city}&aqi=no`)
      .then(response => response.json() )
      .then(data => setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon

      }))
      .then(data => console.log(results))
  }

  return (
    <div className="test">
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
