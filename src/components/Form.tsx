// Form.tsx

import { useState } from "react";

const Form = () => {

    const [city, setCity] = useState<string>("");
    
    /**
     * https://www.weatherapi.com/ が提供しているAPIから天気予報を取得する。
     */
    const getWeather = (e:any) => {

        e.preventDefault();

        fetch("https://api.weatherapi.com/v1/current.json?key=420a5465eb6f4f628e0141918220910&q=London&aqi=no")
        .then(response => console.log(response.json()) )
    }

    return (
        <form>
            <input type="text" name="city" placeholder="都市名"
            onChange={e=> setCity(e.target.value)}
            />
            {city}
            <button type="submit" onClick={getWeather}>都市の天気予報を取得する。</button>
        </form>

    );

}

export default Form;