import React from 'react'

export default function Gallery(props){
    const {url, explanation, title, copyright} = props.image;


    return (
    <div className='image'>
        <h2>{title}</h2>
        <img src={url}></img>
        <p>{explanation}</p>
        { copyright ? <h6>CopyRight: {copyright}</h6> : null}
    </div>);  
}

