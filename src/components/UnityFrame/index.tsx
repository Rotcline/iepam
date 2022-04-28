import React, { useEffect, useState } from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../Header";
import { useFetchSlidesByCourse } from "../../hooks/useFetchSlides";
import { useNavigate, useParams } from "react-router-dom";


const unityContext = new UnityContext({
    loaderUrl: "build/apolo.loader.js",
    dataUrl: "build/apolo.data",
    frameworkUrl: "build/apolo.framework.js",
    codeUrl: "build/apolo.wasm",
  });


const UnityFrame = () =>  {
    const {courseID} = useParams();
    const data = useFetchSlidesByCourse(Number(courseID));
    const navigate = useNavigate();
    if(data !== "Loading..."){
      console.log("hola");
      console.log("perro");
      console.log(JSON.stringify(data));
      //unityContext.send("SlideManager", "getData", JSON.stringify(data));
    }
    
    const buttonClick=()=>{
      unityContext.send("SlideManager", "getData", JSON.stringify(data));}


    const [video, setVideo] = useState("false");
    const [progress, setProgress] = useState(0);
  
    useEffect(function () {
      unityContext.on("isVideo", function (video) {
        setVideo(video);
        console.log(video);
      });
    }, []);
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("loaded", function () {
      unityContext.send("SlideManager", "getData", JSON.stringify(data));
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(JSON.stringify(data));
      unityContext.send("SlideManager", "getData", JSON.stringify(data));
    }, 5000);
    //return () => clearTimeout(timer);
  }, []);

    useEffect(function () {
      unityContext.on("loaded", function (video) {
        // unityContext.send("SlideManager", "getData", JSON.stringify(data));
        console.log("cargado");
      });
    }, []);


    useEffect(function () {
        unityContext.on("Close", function (progress) {
            setProgress(progress);
            console.log(progress);
            navigate("/courses")   
        });
    }, []);

    //console.log("UnityWindow: "+window.localStorage.getItem("loggedUserID"));
    return( 
        <>
            <Header page=""/>
            <iframe width="420" height="315"
              src={video}>
            </iframe>
            <div className="unity-container">
                <Unity className="unity-canvas" unityContext={unityContext} />
            </div>
        </>
    )
};

export default UnityFrame;
