import React from "react";
import "./App.css";
import Header from "./components/header/header";
import SectionFirst from "./components/section/sectionfirst";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 1 };
//     this.plus = this.plus.bind(this)
//   }

//   plus() {
//     this.setState((prevState, prevProps) => {
//       console.log(prevState, prevProps);
//       return {count : ++this.state.count}
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>{this.state.count}</h1>
//           <button onClick={this.plus}>+</button>
//         </header>
//       </div>
//     );
//   }
// }

function App(data) {
  return (
    <div>
      <Header></Header>
      <SectionFirst data={data}/>
    </div>
  );
  
}
  

export default App;
