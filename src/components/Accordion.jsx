import { useState } from "react";
import { Collapsible, ContentContainer, TitleContainer } from "../styled";
function getArrow(isOpen) {
  return isOpen ? "▼" : "▲"
}

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(() => true);
  const toggleOpen = () => setIsOpen(prev => !prev);
  return (
    <Collapsible>
      <TitleContainer onClick={toggleOpen}>
        <div>{title}</div>
        <span>{getArrow(isOpen)}</span>
      </TitleContainer>
      <ContentContainer key={title} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}>{children}</ContentContainer>
    </Collapsible>
  )
}

export default Accordion;