type ResultsPropsType = {
    results:{
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }

}


const Results = (props: ResultsPropsType) =>{
    return(
        <h1>気象データ{props.results.cityName}</h1>
    );
}

export default Results;
