import React from "react";
import CategoryList from "../components/CategoryList";
import SubscriberCard from "../components/SubscriberCard";

let Sidebar = () => {
    return (
        <aside className="App-sidebar">
            <div className="sidebarContent">
                
                <div className="App-branding">
                    <h2 className="App-logo">GameRix</h2>
                    <button className="getPrimeBtn">Get GameRix Pro</button>
                </div>

                <CategoryList/>

                <div className="divider"></div>

                <div className="subscriberSection">
                    <h3>Subscriptions</h3>
                    <ul className="subscriberList">
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                        <SubscriberCard />
                    </ul>

                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
