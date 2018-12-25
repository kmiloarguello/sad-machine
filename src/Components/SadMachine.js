import React, { Component } from "react";
import './Styles/sad-machine.scss'
import Loadable from "react-loadable";
import WOW from "wowjs";
import Character from "../Lib/Character.js";
import Tostada from "../Lib/Tostada.js"

export default class SadMachine extends Component {
  componentDidMount() {
    let loader = document.getElementsByClassName("container_loader")[0];
    if (loader) {
      loader.style.display = "none";
    }
    
    const CA = new Character();
    CA.setFirstName("Camilo");
    const canvas = document.getElementById("sad-canvas");
    const ctx = canvas.getContext("2d");
    CA.setupCanvas(ctx);
  }
  render() {
    return (
        <canvas id="sad-canvas"></canvas>
    );
  }
}
