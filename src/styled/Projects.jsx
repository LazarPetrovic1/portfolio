import styled from 'styled-components'

const ProjectContainer = styled.article`

`;

const ProjectTitle = styled.h2`
  margin: 1rem 0;
  text-align: center;
  font-size: 2.5rem;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 1.75rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.25rem;
  }
  @media (max-width: 350px) {
    font-size: 1.15rem;
  }
`;

const ProjectText = styled.p`
  font-size: 1.1rem;
  padding: 0.25rem;
  @media (max-width: 1000px) {
    font-size: 1.15rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
  @media (max-width: 350px) {
    font-size: 0.85rem;
  }
`;

export { ProjectText, ProjectTitle, ProjectContainer };