import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }


class App extends Component
{
  render()
  {
    return(
      <div>
        <Header />
        <button> Add </button>
        <div>
          <span> Name </span><br />
          <span> Phone </span>
        </div>
        
      </div>
    )
  }
}

export default App;
