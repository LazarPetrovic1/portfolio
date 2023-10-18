import { AnimatedPage } from "../components";
import * as blogimgs from '../assets/projects/blogger';
import * as flourishimgs from '../assets/projects/flourish-text-editor'
import * as photoimgs from '../assets/projects/photo-app'
import * as vuecamimgs from '../assets/projects/vue-camera'
import ReactImageGallery from "react-image-gallery";
import { ProjectText, ProjectTitle, ProjectContainer } from '../styled';

const blogEntries = Object.values(blogimgs).map(item => ({ original: item, thumbnail: item }));
const flourishEntries = Object.values(flourishimgs).map(item => ({ original: item, thumbnail: item }));
const photoEntries = Object.values(photoimgs).map(item => ({ original: item, thumbnail: item }));
const vuecamEntries = Object.values(vuecamimgs).map(item => ({ original: item, thumbnail: item }));

function Lorem() {
  return (
    <ProjectText>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam veniam maiores nostrum!<br />
      Quos tempora et labore itaque eum dignissimos repellat adipisci dolorum, laborum fugit commodi, vitae, corporis quia a maxime!<br />
      Harum, animi distinctio. Exercitationem minus maiores vitae eaque soluta. Temporibus rem reiciendis facere vel dolorem fugiat.<br />
      Praesentium tempora iure repellendus earum natus quisquam tenetur alias! Voluptatum esse optio ducimus adipisci, debitis dolores porro.<br />
      Tenetur incidunt perferendis eveniet facilis hic officia recusandae dolores, nesciunt veritatis, officiis fuga cumque necessitatibus.<br />
      Sunt est temporibus optio fugiat at amet quisquam deserunt a architecto ad. Aspernatur repudiandae quaerat cupiditate quas, excepturi odio!<br />
      Consequuntur distinctio cum quibusdam, quaerat aliquid incidunt molestiae delectus quam officiis atque eligendi, aut, voluptate est dolorum at architecto praesentium quidem deleniti reiciendis sapiente neque et quae excepturi fugit.<br />
      Corrupti possimus quia rerum aliquam labore deserunt voluptates eum cum nostrum odit. Velit quo saepe accusantium recusandae, commodi accusamus facilis porro ratione.
    </ProjectText>
  )
}

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
        <ProjectContainer>
          <ProjectTitle>bloggerautviewapp</ProjectTitle>
          <ReactImageGallery items={blogEntries} />
          <Lorem />
          <hr />
        </ProjectContainer>
        <ProjectContainer>
          <ProjectTitle>flourish-text-editor</ProjectTitle>
          <ReactImageGallery items={flourishEntries} />
          <Lorem />
        </ProjectContainer>
        <ProjectContainer>
          <ProjectTitle>photobombth</ProjectTitle>
          <ReactImageGallery items={photoEntries} />
          <Lorem />
        </ProjectContainer>
        <ProjectContainer>
          <ProjectTitle>fullstack-vue-camera-app</ProjectTitle>
          <ReactImageGallery items={vuecamEntries} />
          <Lorem />
        </ProjectContainer>
      </div>
    </AnimatedPage>
  )
}

export default Projects;