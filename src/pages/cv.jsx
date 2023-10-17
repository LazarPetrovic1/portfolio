import { AnimatedPage } from "../components";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resume from '../assets/resume.pdf'

function CV() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <AnimatedPage>
      <div className="scroller">
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