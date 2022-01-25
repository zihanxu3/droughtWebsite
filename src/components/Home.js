import React, { Component } from "react";

// import homeImg from '../assets/homeImg.png'


class Home extends Component {
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
                        <p style={{ fontFamily: 'Noto Sans' }}>The current drought in the US Southwest started in the summer of 2020, has expanded over time and
                            space with growing intensity, and is developing into a megadrought, the worst in the recent history of the
                            region (US Drought Monitor 2021). The drought has already severely affected agriculture, water supply,
                            hydropower, and the environment and ecosystems in several states. For example, irrigation has been
                            largely cut off in New Mexico (Wyland 2021); water supply has been significantly reduced from the
                            regular amount in many areas (Sommer 2021); the hydropower facility at Lake Oroville, California is
                            expected to completely shut down (Meeks 2021); the drought and heat has set the stage for huge wildfires
                            burning across the region (Hersher and Chiwaya 2021). These impacts have caught national-wide
                            attention via social media and public news. The extreme event is still ongoing and shows no sign of
                            ending, with unprecedented consequences.</p>

                    </div>
                </div>
            </div>
        )

    }
}
export default Home;