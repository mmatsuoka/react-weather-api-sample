// Form.tsx

import { useState } from "react";

const Form = () => {

    const [city, setCity] = useState<string>("");

    return (
        <form>
            <input type="text" name="city" placeholder="都市名"
            onChange={e=> setCity(e.target.value)}
            />
            {city}
            <button type="submit">都市の天気予報を取得する。</button>
        </form>

    );
}

export default Form;