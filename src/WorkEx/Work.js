import React from 'react';

export const Work=(props)=>{
    return(
        <div className='workEx'>
            <img src={props.srcImg} alt="" className='bg-white' style={{"width":props.widthImg,"height":props.heightImg}}/>
            <h4>{props.jp}</h4>
            <span>{props.jd}</span>
        </div>
    )
}



