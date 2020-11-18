import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  const convertToGif = async () => {

    // Write the file to memory 
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(video));

    // Run the FFMpeg command
    await ffmpeg.run('-i', 'input.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'output.gif');

    // Read the result
    const data = ffmpeg.FS('readFile', 'output.gif');

    // Create a URL
    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
    setGif(url)
  }
  return ready ? (
    
    <div className="App">


      <div class="file-drop-area">
        <span class="fake-btn">Choose files</span>
        <span class="file-msg">or drag and drop files here</span>
       <input class="file-input" multiple type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
      </div>
      { }
      <div className="video-container">
          { video && <video
          controls
          width="500"
          src={URL.createObjectURL(video)}>

          </video>}
      </div>
      <div class="center">
          <button class="button" type="button" onClick={convertToGif}>Convert</button>
      </div>

      <h3>Result</h3>
      { gif && <img src={gif} width="500" />}

      {gif && <div class="center">
          <button class="button" type="button"><a href={gif} target="_blank">Download GIF</a></button>
      </div>}
      <footer>
          <a href="https://www.linkedin.com/in/b3ns44d/" target="_blank">
            Abdessamad Bensaad
          </a>
      </footer>
    </div>
  )
    :
    (
      <Loading />
    );
}

export default App;
