import React from "react";
import Card from "./Card";
import contacts from "../models/contacts";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Card
                title={contacts[0].name}
                imgURL={contacts[0].imgURL}
                telephoneNo={contacts[0].phone}
                email={contacts[0].email}/>
            <Card
                title={contacts[1].name}
                imgURL={contacts[1].imgURL}
                telephoneNo={contacts[1].phone}
                email={contacts[1].email}/>
            <Card
                title={contacts[2].name}
                imgURL={contacts[2].imgURL}
                telephoneNo={contacts[2].phone}
                email={contacts[2].email}/>
        </div>
    );
}

export default App;
