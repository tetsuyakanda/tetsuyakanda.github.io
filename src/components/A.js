import styled from "styled-components";

const A = styled.a.attrs((props) => ({
  target: "_blank",
  rel: "nofollow noopener noreferrer",
}))``;

export default A;
