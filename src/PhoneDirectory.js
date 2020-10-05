import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber'

class PhoneDirectory extends Component{

    constructor()
    {
        super();
        this.state ={
            subscribersList:[{
                id:1,
                name: "dummy1",
                phone: "00000000"
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        console.log("PhoneDirectory:: addSubscriberHandler");
        let subscriberList = this.state.subscribersList;
        if(subscriberList.length > 0)
        {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id+ 1;
        }
        else{
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log("PhoneDirectory:: ", this.state);
    }
    render()
    {
     return (
         //<AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
         <ShowSubscriber subscriberList = {this.state.subscribersList}/>
     )
    }
}

export default PhoneDirectory