import Cardtemplate from "./CardTemplate";
import  Agrafort from "./images/agra-fort.jpg";
import hawamahal from "./images/hawa-mahal.jpg";
import jagannathTemple from "./images/jagannath_temple.jpg";
import konarksunTemple from "./images/Konark-Sun-Temple.jpg";

const Sdata=()=>{


    return(


        <div>
        <h1 className="heading_style">LET'S VISIT INDIA HISTORICAL PLACES</h1>
        <Cardtemplate imgsrc={Agrafort}
        sname="Agra-Fort" 
        title="Agra-fort Historical Place" 
        link="https://youtu.be/rk1_T7bWw7U" />
  
        <Cardtemplate imgsrc={hawamahal}
        sname="Hawa-Mahal" 
        title="Hawa-Mahal Historical place"
        link="https://youtu.be/vJE-idBH6Rk" />
  
        <Cardtemplate imgsrc={jagannathTemple}
        sname="Jagannth_Temple" 
        title="Jagannath_temple Historical place"
        link="https://youtu.be/AGA8aNCByFI" />
  
        <Cardtemplate imgsrc={hawamahal}
        sname="Konark_Sun_Temple" 
        title="konark_Sun_Temple Historical place"
        link="https://youtu.be/iSvhr14Pa44" />
        

        </div>
    )


}

export default Sdata;