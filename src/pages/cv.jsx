import { AnimatedPage } from "../components";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resume from '../assets/resume.pdf'
import { scrollerBottomPushBack } from "../utils";
import { useEffect } from "react";

function CV() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  console.log("DLOPII", defaultLayoutPluginInstance);
  useEffect(() => {
    document.getElementById("main-navigation").scrollIntoView();
  }, [])
  return (
    <AnimatedPage>
      <div className="scroller mb-5" style={{ maxHeight: scrollerBottomPushBack }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={resume}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </AnimatedPage>
  )
}

export default CV;