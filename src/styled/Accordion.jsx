import styled from "styled-components";
import { motion } from "framer-motion";

const Collapsible = styled.section``;

const TitleContainer = styled.article`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  font-size: 1.5rem;
  position: relative;
  z-index: 10000000000;
  & > div { font-weight: bolder; }
`;

const ContentContainer = styled(motion.main)``;

export { Collapsible, TitleContainer, ContentContainer }