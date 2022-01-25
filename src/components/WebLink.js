import React, { Component } from "react";

// import homeImg from '../assets/homeImg.png'

let links = require('../linkjson.json');

const linkrendered = links.map((link) => 
    <li><a href={link["URL"]}>{link["Article Name"]}</a></li>
);

class WebLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <p style={{ paddingTop: 70 }}>

                </p>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        {/* <img src={homeImg} style={{ maxWidth: '40%' }}>
                        </img> */}
                    </div>
                    <div style={{ flex: 2, marginLeft: 200, marginRight: 200, textAlign: 'justify' }}>
                        {linkrendered}
                    </div>
                </div>
            </div>
        )

    }
}
export default WebLink;