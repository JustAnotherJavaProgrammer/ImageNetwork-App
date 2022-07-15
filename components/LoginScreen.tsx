import React from "react";
import { Button, Image, Text, View } from "react-native";
import { getText } from "../common/api";
import { FakeUser } from "../common/api";
import Card from "./common/Card";

type State = {
    userdata: FakeUser | null;
}

const textStyle = {color: "black", fontSize: 16};

export default class LoginScreen extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userdata: null,
        };
        getText().then((userdata) => {this.setState({userdata})});
    }
    render() {
        if (this.state.userdata === null) {
            return (
                <Card title="Fake user data">
                    <Text>Loading...</Text>
                </Card>
            );
        }
        return (
                <Card title="User Data">
                    <Text style={textStyle}>Full name: {this.state.userdata.name.title} {this.state.userdata.name.first} {this.state.userdata.name.last}</Text>
                    <Text style={textStyle}>E-mail address: {this.state.userdata.email}</Text>
                    <Text style={textStyle}>Username: {this.state.userdata.login.username}</Text>
                    <Text style={textStyle}>Fake profile picture:</Text>
                    <Image source={{uri: this.state.userdata.picture.large}} style={{width: 100, height: 100}}></Image>
                    <Button color={"#F2AF29"} title="Load another one" onPress={() => {getText().then((userdata) => {this.setState({userdata})})}}/>
                </Card>);
    }
}