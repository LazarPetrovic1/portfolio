import styled from 'styled-components'

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 1rem 0;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    & > [role="textblock"] { font-size: 0.9rem }
  }
  @media (max-width: 500px) {
    & > [role="textblock"] { font-size: 0.85rem }
  }
  @media (max-width: 400px) {
    & > [role="textblock"] { font-size: 0.8rem }
  }
  @media (max-width: 350px) {
    & > [role="textblock"] { font-size: 0.75rem }
  }
`;

export default AboutSection;