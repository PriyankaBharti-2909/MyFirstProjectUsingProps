import React from "react";
import { ReactDOM } from "react";
import './index.css';
const Cardtemplate=(props)=>{


return(
<div>

<div className="cards">
<div className="card">
<img src={props.imgsrc} alt="mypic" className="card_img"/>

<div className="card__info">
<span className="card__category">{props.title}</span>
<h3 className="card__title">{props.sname}</h3>
<a href={props.link} target="_blank">
<button>Watch Now</button>
</a>


</div>


</div>






</div>


</div>


)


}

export default Cardtemplate;