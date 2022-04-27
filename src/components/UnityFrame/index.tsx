import React, { useEffect, useState } from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../Header";
import { useFetchSlidesByCourse } from "../../hooks/useFetchSlides";
import { useParams } from "react-router-dom";


const unityContext = new UnityContext({
    loaderUrl: "build/max.loader.js",
    dataUrl: "build/max.data",
    frameworkUrl: "build/max.framework.js",
    codeUrl: "build/max.wasm",
  });


const UnityFrame = () =>  {
    const {courseID} = useParams();
    const data = useFetchSlidesByCourse(Number(courseID));

    if(data !== "Loading..."){
      console.log(JSON.stringify(data));
      unityContext.send("SlideManager", "getData", JSON.stringify(data));

    }

    const [video, setVideo] = useState("false");
    const [progress, setProgress] = useState(0);
  
    useEffect(function () {
      unityContext.on("isVideo", function (video) {
        setVideo(video);
        console.log(video);
      });
    }, []);

    useEffect(function () {
        unityContext.on("Close", function (progress) {
            setProgress(progress);
            console.log(progress)
        });
    }, []);

    //console.log("UnityWindow: "+window.localStorage.getItem("loggedUserID"));
    return( 
        <>
            <Header page=""/>
            <div className="unity-container">
                <Unity className="unity-canvas" unityContext={unityContext} />
            </div>
        </>
    )
};

export default UnityFrame;