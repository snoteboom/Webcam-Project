import React, { Component } from 'react';
import '../styles/styles.scss';
import Webcam from "react-webcam";

class WebcamView extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.interval = setInterval(() => this.takeScreenShot(), 2000);
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    takeScreenShot=()=>{
        const imageSrc = this.webcam.getScreenshot();
        this.props.updateScreenshots(imageSrc)
    }
    render() {
        return (
            <div className="WebcamView">
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                />
            </div>
        );
    }
}

export default WebcamView;