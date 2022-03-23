import React from 'react';

const menucard = ({Data}) => {
    return (
    <>
         <section className="main-card--cointainer ">
        {Data.map((curElem)=> {
            const {id,category,name,image,description} = curElem;
            return (
                <>
            <div className="card-container" key={id}>
                <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle"> {id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">{description}
                    </span>
                    <div className="card-read">Read </div>
                    <img src={image} alt="" />
                    <div className="card-tag subtle">Oreder Now</div>
                </div>
                </div>
            </div>
        
        </>
        
            )
        })};
        </section>
        </>
    );
};

export default menucard;
