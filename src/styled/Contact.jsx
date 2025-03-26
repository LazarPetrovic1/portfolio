import styled from 'styled-components'

const Image = styled.img`height: 1.5rem; width: 1.5rem; align-self: end;`
const Text = styled.span`
  margin-left: 1.2rem; font-size: 1.5rem;
  @media (max-width: 1100px) { font-size: 1.25rem; word-break: break-all; }
  @media (max-width: 600px) { font-size: 1rem; word-break: break-all; }
  @media (max-width: 400px) { font-size: 0.9rem; word-break: break-all; }
  @media (max-width: 350px) { font-size: 0.8rem; word-break: break-all; }
`

const Holder = styled.p`
  display: flex;
  align-items: baseline;
`;

export { Image, Text, Holder };