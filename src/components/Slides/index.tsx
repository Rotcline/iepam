import React, { useEffect, useState } from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../Header";
import { useFetchSlidesByCourse } from "../../hooks/useFetchSlides";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContainer } from "./UnityFrame.styles";


const unityContext = new UnityContext({
  loaderUrl: "build/test/SlidesTestNew.loader.js",
  dataUrl: "build/test/SlidesTestNew.data",
  frameworkUrl: "build/test/SlidesTestNew.framework.js",
  codeUrl: "build/test/SlidesTestNew.wasm",
});


const Slides = () => {
  const { courseID } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState("false");
  const [progress, setProgress] = useState(0);
  const data = useFetchSlidesByCourse(Number(courseID));
  console.log(data);


  useEffect(function () {
    unityContext.on("isVideo", function (video) {
      setVideo(video);
      console.log(video);
    });
  }, []);
 
  useEffect(function () {
    unityContext.on("iCanSend", function () {
      if (data !== "Loading..."){
        console.log("Smn ahi te van los datos crac")
        console.log(JSON.stringify(data));
        unityContext.send("SlideManager", "getData", JSON.stringify(data));
      }
    });
  }, [data]);

  useEffect(function () {
    unityContext.on("Close", function (progress) {
      console.log(progress);
      setProgress(progress);
      navigate("/courses")
    });
  }, []);

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data !== "Loading...") {
        console.log(JSON.stringify(data));
        unityContext.send("SlideManager", "getData", JSON.stringify(data));
      }
    }, 5000);
  }, []);*/

  if (data === "Loading..."){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <>
      <Header page="" />
      {video !== "false" ? <VideoContainer src={video} /> : <></>}
      <div className="unity-container">
        <Unity className="unity-canvas" unityContext={unityContext} />
      </div>
    </>
  )
};

export default Slides;



