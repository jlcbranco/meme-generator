import React, { Component } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default class App extends Component {

    render() {

        return(
            <main>
                <Header />
                <Meme />
            </main>

        )

    }

}