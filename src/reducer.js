const newQuote = 'newQuote';
const initialState={
    content:'Loading....',
    author:'Loading....',
    link :'https://twitter.com/intent/tweet'
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case newQuote:
            return {
                content: action.content,
                author: action.author,
                link : state.link
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                content: action.payload[0].content,
                author: action.payload[0].author,
                link:state.link
            }
        case 'FETCH_DATA_FAILURE':
            return{
                content: 'Error...',
                author: 'In the mirror...',
                link:state.link
            }
        case 'hrefChange':
            return{
                content:state.content,
                author: state.author,
                link:action.link
            }
        default:
            return state
    }
}
export default rootReducer;