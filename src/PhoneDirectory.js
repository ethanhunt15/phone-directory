import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersDisplayList: [{
                id: 1,
                name: "dummy1",
                phone: "00000000"
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        console.log("PhoneDirectory:: addSubscriberHandler START");
        let subscriberTempList = this.state.subscribersDisplayList;
        if (subscriberTempList.length > 0) {
            newSubscriber.id = subscriberTempList[subscriberTempList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscriberTempList.push(newSubscriber);
        this.setState({ subscribersDisplayList: subscriberTempList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        console.log("PhoneDirectory::deleteSubscriberHandler START");
        let subscriberTempList = this.state.subscribersDisplayList;
        let subscriberIndex = 0;
        subscriberTempList.forEach(function (subscriber, index) {
            if (subscriber.id == subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscriberTempList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({ subscribersDisplayList: newSubscribers });
        console.log("PhoneDirectory::deleteSubscriberHandler END");
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersDisplayList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path='/add' render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory