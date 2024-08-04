import { AnimatedPage } from "../components";
import ReactImageGallery from 'react-image-gallery';
import { projectinformation, scrollerBottomPushBack } from "../utils";
import { ProjectText, ProjectTitle, ProjectContainer } from '../styled';

const { blog, flourish, photoapp, impulse, musicplayer, seezassignment, raspberrySpy } = projectinformation;

function Projects() {
  return (
    <AnimatedPage>
      <div className="text-holder scroller" style={{ maxHeight: scrollerBottomPushBack, paddingRight: '1.5rem' }}>
        <h1>Projects</h1>
        <p className="lead">
          This section is dedicated to the projects I've written in my spare time for leisure.<br />
          For more information about corporate projects, please visit the <b>/about</b> or <b>/resume</b> routes.
        </p>
        <hr />
        <ProjectContainer>
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
        </ProjectContainer>
        <ProjectContainer>
          <ProjectTitle>{seezassignment.title}</ProjectTitle>
          <ReactImageGallery items={seezassignment.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{seezassignment.FE}</p>
              <p>{seezassignment.BE}</p>
              <p>Features</p>
              <ul>
                <>
                  {seezassignment.features.map((f, i) => <li key={i}>{f}</li>)}
                  {seezassignment.links.map((f, i) => <a href={f[0]} rel="noreferrer" target="_blank" key={i}>{f[1]}</a>)}
                </>
              </ul>
            </div>
          </ProjectText>
          <hr />
        </ProjectContainer>
        
        <ProjectContainer>
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
        </ProjectContainer>

        <ProjectContainer>
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
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTitle>{musicplayer.title}</ProjectTitle>
          <ReactImageGallery items={musicplayer.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{musicplayer.DE}</p>
              <p>{musicplayer.FE}</p>
              <p>Features</p>
              <ul>
                {musicplayer.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </ProjectContainer>
                
        <ProjectContainer>
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
        </ProjectContainer>
        <ProjectContainer>
          <ProjectTitle>{raspberrySpy.title}</ProjectTitle>
          <ReactImageGallery items={raspberrySpy.images} />
          <ProjectText>
            <div>
              <p>Tech Stack:</p>
              <p>{raspberrySpy.DE}</p>
              <p>{raspberrySpy.FE}</p>
              <p>Features</p>
              <ul>
                {raspberrySpy.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ProjectText>
          <hr />
        </ProjectContainer>
      </div>
    </AnimatedPage>
  )
}

export default Projects;