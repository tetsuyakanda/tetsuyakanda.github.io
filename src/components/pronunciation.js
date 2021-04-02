import React from "react";
import styled from "styled-components";

const Pronunciation = () => {
  return (
    <Tooltip>
      <Div>🔊about my name</Div>
      <Description>
        <div>
          &ldquo;Kanda&rdquo; is my family name and &ldquo;Tetsuya&rdquo; is my
          given name.
        </div>
        <div>
          &ldquo;Tetsuya&rdquo; may be difficult for some people to pronounce,
          so please call me &ldquo;Kanda&rdquo; or &ldquo;Kanda-san&rdquo;.
        </div>
        <Div2>
          It is very common in Japan to call someone by their family name, so
          for me, it&apos;s easy to respond when you call me
          &ldquo;Kanda-san&rdquo;.
        </Div2>
      </Description>
    </Tooltip>
  );
};

const Div2 = styled.div`
  font-size: 12px;
`;

const Div = styled.div`
  font-size: 10px;
  margin-bottom: 1rem;
`;

const Tooltip = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
`;

const Description = styled.div`
  display: none;
  position: absolute;
  background-color: hsla(150, 100%, 90%);
  padding: 5px;
  border: 1px solid hsla(150, 100%, 30%, 0.9);
  border-radius: 4px;
  ${Tooltip}:hover & {
    display: inline-block;
  }
`;

export default Pronunciation;
