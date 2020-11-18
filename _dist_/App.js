import React, {useState, useEffect} from "../web_modules/react.js";
import "./App.css.proxy.js";
import Loading2 from "./Loading.js";
import {createFFmpeg, fetchFile} from "../web_modules/@ffmpeg/ffmpeg.js";
const ffmpeg2 = createFFmpeg({log: true});
function App2() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const load = async () => {
    await ffmpeg2.load();
    setReady(true);
  };
  useEffect(() => {
    load();
  }, []);
  const convertToGif = async () => {
    ffmpeg2.FS("writeFile", "input.mp4", await fetchFile(video));
    await ffmpeg2.run("-i", "input.mp4", "-t", "2.5", "-ss", "2.0", "-f", "gif", "output.gif");
    const data = ffmpeg2.FS("readFile", "output.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
  };
  return ready ? /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "file-drop-area"
  }, /* @__PURE__ */ React.createElement("span", {
    class: "fake-btn"
  }, "Choose files"), /* @__PURE__ */ React.createElement("span", {
    class: "file-msg"
  }, "or drag and drop files here"), /* @__PURE__ */ React.createElement("input", {
    class: "file-input",
    multiple: true,
    type: "file",
    onChange: (e) => setVideo(e.target.files?.item(0))
  })), /* @__PURE__ */ React.createElement("div", {
    className: "video-container"
  }, video && /* @__PURE__ */ React.createElement("video", {
    controls: true,
    width: "500",
    src: URL.createObjectURL(video)
  })), /* @__PURE__ */ React.createElement("div", {
    class: "center"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "button",
    type: "button",
    onClick: convertToGif
  }, "Convert")), /* @__PURE__ */ React.createElement("h3", null, "Result"), gif && /* @__PURE__ */ React.createElement("img", {
    src: gif,
    width: "500"
  }), gif && /* @__PURE__ */ React.createElement("div", {
    class: "center"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "button",
    type: "button"
  }, /* @__PURE__ */ React.createElement("a", {
    href: gif,
    target: "_blank"
  }, "Download GIF"))), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/b3ns44d/",
    target: "_blank"
  }, "Abdessamad Bensaad"))) : /* @__PURE__ */ React.createElement(Loading2, null);
}
export default App2;
