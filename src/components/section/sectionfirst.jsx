import React, { useState } from "react";
import data from "../../db/db";
import Card from "../card/card";
import "../section/Sectionfirst.css";

function SectionFirst() {
  const [state, setState] = useState(data);
  return (
    <div className="first_section">
        {
        state.map((elem) => {
          return <Card elem={elem}/>
        })
        }
    </div>
  );
}

export default SectionFirst;
