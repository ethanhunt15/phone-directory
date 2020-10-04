import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import './App.css'

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }


class App extends Component
{

  deleteHandler(msg)
  {
    alert(msg);
  }

  render()
  {
    let subscribers = [
      {
    id: 1,
    name: "name1",
    phone: "phone1"
    },
    {
      id: 2,
      name: "name2",
      phone: "phone2"
    }
    ]

    return(
      <div className="component-body-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
            {
              subscribers.map(sub =>{
                return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                {/*onClick={this.deleteHandler.bind(this, "Delete Clicked")};*/}
                 <button className="custom-btn delete-btn" onClick={() => this.deleteHandler("delete Clicked")}>Delete</button>
              </span>
              </div>
              })
            }

        </div>
      </div>
    )
  }
}

export default App;
