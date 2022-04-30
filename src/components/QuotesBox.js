import React from 'react';
import Quotes from '../quotes.json'

const QuotesBox = ({index}) => {
    return (
        <div className="phrase">
            <i className='bx bxs-quote-alt-left'></i>
            <h2>{Quotes[index].quote}</h2>
        </div>
    );
};

export default QuotesBox;