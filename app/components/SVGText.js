import styled, { css } from "styled-components";

const SVG = styled.svg`
  display: block;
  margin: auto;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
`;
const Text = styled.text`
  font-family: "Bowlby One SC", cursive;
  fill: #363732;
`;

const SVGText = props => (
  <SVG width={props.width} height={props.height}>
    <Text
      x="50%"
      y="55%"
      fontSize={props.size}
      alignmentBaseline="central"
      textAnchor="middle"
    >
      {props.value}
    </Text>
  </SVG>
);

export default SVGText;
