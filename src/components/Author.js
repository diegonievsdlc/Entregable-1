import React from 'react';
import Quotes from '../quotes.json'

const Author = ({index}) => {
    return (
        <div>
            <p>{Quotes[index].author}</p>
        </div>
    );
};

export default Author;