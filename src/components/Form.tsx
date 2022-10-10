// Form.tsx

type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}


const Form = (props:FormPropsType) => {

    return (
        <form  onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市名を英語で入力"
            onChange={e=> props.setCity(e.target.value)}
            />
            <button type="submit">都市の天気予報を取得する。</button>
        </form>

    );

}

export default Form;