import React, { useEffect, useState } from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../Header";
import { useFetchSlidesByCourse } from "../../hooks/useFetchSlides";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContainer } from "./UnityFrame.styles";


const unityContext = new UnityContext({
  loaderUrl: "build/apolo.loader.js",
  dataUrl: "build/apolo.data",
  frameworkUrl: "build/apolo.framework.js",
  codeUrl: "build/apolo.wasm",
});


const Slides = () => {
  const { courseID } = useParams();
  const data = useFetchSlidesByCourse(Number(courseID));
  const navigate = useNavigate();
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
      console.log(progress);
      setProgress(progress);
      navigate("/courses")
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data !== "Loading...") {
        console.log(JSON.stringify(data));
        unityContext.send("SlideManager", "getData", JSON.stringify(data));
      }
    }, 5000);
  }, []);

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



