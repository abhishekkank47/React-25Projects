import React, { useState } from "react";
import "../accordion/Accordion.css";
import data from "./Accordion";

const AccordionComp = () => {
  const [selected, setSelected] = useState(null);

  //handle Quetion
  const handleQuetion = (getId) =>{
    setSelected(getId)
  }

  return (
    <>
      <div className="container">
        <div>
            <center>
                <h1 style={{color:'#22c1c3'}}>Accordion</h1>
            </center>
          

          {data && data.length > 0 ? (
            data.map((items) => (
              <div className="items" key={items.id} onClick={()=>handleQuetion(items.id)}>
                <center>
                  <h3>{items.question}</h3>
                  {
                    selected === items.id ? 
                    <div>
                        {items.answer}
                    </div> : null
                  }
                </center>
              </div>
            ))
          ) : (
            <h1>NO DATA PRESENT</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AccordionComp;
