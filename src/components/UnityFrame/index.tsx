import React from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../Header";
import { useFetchSlidesByCourse } from "../../hooks/useFetchSlides";
import { useParams } from "react-router-dom";


const unityContext = new UnityContext({
    loaderUrl: "build/receptor.loader.js",
    dataUrl: "build/receptor.data",
    frameworkUrl: "build/receptor.framework.js",
    codeUrl: "build/receptor.wasm",
  });


const UnityFrame = () =>  {
    const {courseID} = useParams();
    const data = useFetchSlidesByCourse(Number(courseID));
    if(data !== "Loading..."){
      console.log(JSON.stringify(data));
      unityContext.send("SlideManager", "getData", JSON.stringify(data));
    }
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