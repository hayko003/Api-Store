import React from "react";
// import "../header/header.css"
import Card from "../card/card";
import "../section/Sectionfirst.css"
class SectionFirst extends React.Component {
  render() {
    return (
      <div className="first_section">
        {this.props.data.map((elem) => {
          return <Card elem={elem} />;
        })}
      </div>
    );
  }
}

export default SectionFirst;
