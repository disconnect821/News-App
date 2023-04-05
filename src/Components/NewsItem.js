import React from "react";

 const NewsItem =({title,desc ,imgUrl ,newsUrl,mode}) =>{
    return (
      <div>
        <div className="card" style={{backgroundColor : `${mode==='light'?"#374151":"white"}`}}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{color : `${mode ==='light'?'white':'black'}`}}>{title}</h5>
            <p className="card-text" style={{color : `${mode ==='light'?'white':'black'}`}}>
              {desc}
            </p>
            <a href={newsUrl} rel="noreferrer"  target ='_blank' className="btn btn-primary">
              Read Full News
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
