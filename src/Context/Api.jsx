import axios from "axios";

export const fetchQuestionList = async() =>{
    const {data} = await axios.get('https://localhost:7170/api/Questions');

    return data;
}