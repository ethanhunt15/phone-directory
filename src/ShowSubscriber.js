import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import './ShowSubscriber.css'

class ShowSubscriber extends Component
{
  deleteHandler(msg)
  {
    alert(msg);
  }

  render()
  {
    console.log("App render:: START")
    console.log("App render:: BEFORE RETURN")
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
              this.props.subscriberList.map(sub =>{
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

export default ShowSubscriber;
