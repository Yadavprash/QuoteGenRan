import React from "react";
import {connect} from "react-redux";
import './styles.css'
import {fetchData} from "./api";


const addLink = (hrefVal)=>{
    return {
        type: 'hrefChange',
        link : hrefVal
    }
}
class MyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.hrefValue='https://twitter.com/intent/tweet'
        this.changeQuote=this.changeQuote.bind(this);
        this.tweetLink=this.tweetLink.bind(this);
    }



    changeQuote(){
        this.props.fetcher()
        // console.log(this.props);
    }
    tweetLink(){
        const currentQuote = this.props.content;
        const currentAuthor=this.props.author;
        const hrefValue = ('https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+currentQuote+'"  -'+currentAuthor));
        this.props.replaceLink(hrefValue);
    }
    render() {
        const {content,author,link} = this.props
        return (
            <div id="quote-box">
                <div id="text">
                    <p>{content}</p>

                </div>
                <div id="author"><p>{author}</p></div>
                <div id="tweet">
                    <a href={link} id="tweet-quote" target="_blank"><button onClick={this.tweetLink}>Tweet</button> </a>
                    <button id="new-quote" onClick={this.changeQuote}>New-quote</button>
                </div>
            </div>
        )
    }
}
//React and Redux
const mapStateToProps =(state)=>{
    return {
        content:state.content,
        author:state.author,
        link:state.link
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetcher: () => {
            dispatch(fetchData());
        },
        replaceLink: (hrefVal) => {
            dispatch(addLink(hrefVal));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);






