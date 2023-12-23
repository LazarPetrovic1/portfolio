import { AnimatedPage } from "../components";
import ReactImageGallery from 'react-image-gallery';
import { projectinformation } from "../utils";
import { ProjectText, ProjectTitle } from '../styled';

const { blog, flourish, photoapp, impulse } = projectinformation;

function Projects() {
  return (
    <AnimatedPage>
      <div className="text-holder scroller">
        <h1>Projects</h1>
        <p className="lead">
          This section is dedicated to the projects I've written in my spare time for leisure.<br />
          For more information about corporate projects, please visit the <b>/about</b> or <b>/resume</b> routes.
        </p>
        <hr />
        <div>
          <ProjectTitle>{blog.title}</ProjectTitle>
          <ReactImageGallery items={blog.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{blog.FE}</p>
              <p>{blog.BE}</p>
              <p>Features</p>
              <ul>
                {blog.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </div>
        
        <div>
          <ProjectTitle>{flourish.title}</ProjectTitle>
          <ReactImageGallery items={flourish.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{flourish.DE}</p>
              <p>{flourish.FE}</p>
              <p>Features</p>
              <ul>
                {flourish.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </div>

        
        <div>
          <ProjectTitle>{photoapp.title}</ProjectTitle>
          <ReactImageGallery items={photoapp.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{photoapp.DE}</p>
              <p>{photoapp.FE}</p>
              <p>Features</p>
              <ul>
                {photoapp.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </div>

        <div>
          <ProjectTitle>{impulse.title}</ProjectTitle>
          <ReactImageGallery items={impulse.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{impulse.DE}</p>
              <p>{impulse.FE}</p>
              <p>{impulse.BE}</p>
              <p>Features</p>
              <ul>
                {impulse.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Projects;