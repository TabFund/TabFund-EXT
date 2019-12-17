import * as actions from './actionTypes';


export const fetchSuggestions = data =>{
    return async dispatch =>{
        try{
            fetch('http://suggestqueries.google.com/complete/search?client=chrome&q=' + data.query)
                .then(res => console.log(res.json))
        }catch(error){
            console.log(error);
        }
    }
}

export const googleSearch = data =>{
    console.log(data.query);
    
    return async dispatch =>{
        fetch('https://www.google.com/search?q=rugby').then(res => console.log(res)
        )
    }
}