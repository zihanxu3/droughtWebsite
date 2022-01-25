import React, { Component } from "react";
import { writeUserData } from '../firebase';

// import homeImg from '../assets/homeImg.png'
import {
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Typography,
    Tabs,
    Tab,
    TextField,
} from '@material-ui/core';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.pushDataToFirebase = this.pushDataToFirebase.bind(this);

        this.state = {
            value: "",
            state: "",
        }
    }

    handleChange(e) {
        const userInput = e.target.value;

        this.setState({
            value: userInput
        });
    }

    handleChangeState(e) {
        const userInput = e.target.value;

        this.setState({
            state: userInput
        });
    }
    async pushDataToFirebase() {
        try {
            await writeUserData(this.state.value, this.state.state);
            console.log("writing succeed");
        } catch (error) {
            console.error("Error adding data to fb", error);
        }
    }

    render() {
        // const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <p style={{ paddingTop: 70 }}>

                </p>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <TextField
                            style={{ width: 500 }}
                            id="outlined-basic" label="Drought Situation" variant="outlined"
                            placeholder="Please describe your local drought situation."
                            multiline
                            value={this.state.value}
                            onChange={this.handleChange}
                            rows={5}
                            rowsMax={10}
                        />
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <TextField
                            id="outlined-basic" label="State" variant="outlined"
                            placeholder="IL"
                            value={this.state.state}
                            onChange={this.handleChangeState}
                        />
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <Button variant="outlined" color="primary" onClick={this.pushDataToFirebase}>
                            Submit
                        </Button>
                    </div>

                </div>
            </div>
        )

    }
}
export default UserInput;