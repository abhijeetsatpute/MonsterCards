import React from "react";
const Card = ({name,email,username,id})=>{
    return(
        <div className="bg-lightest-blue dib pill br4 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt={`${username}`} src={`https://robohash.org/${id}?set=set2`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;