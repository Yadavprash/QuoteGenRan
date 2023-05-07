export const fetchData=()=>{
    return (dispatch)=>{
    fetch('https://api.quotable.io/quotes/random')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            // console.log("HII")
            dispatch(fetchDataSuccess(data));
        })
        .catch(error=>{
            dispatch(fetchDataFailure(error))
        });
    }
}

export const fetchDataSuccess = (data) => {
    return { type: 'FETCH_DATA_SUCCESS', payload: data };
};

export const fetchDataFailure = (error) => {
    return { type: 'FETCH_DATA_FAILURE', payload: error };
};