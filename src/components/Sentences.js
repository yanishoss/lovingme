import React, { Fragment } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import HeartMultipleOutlineIcon from "mdi-react/HeartMultipleOutlineIcon";

const Item = styled.li`
display: flex;
width: 90%;
min-height: 40px;
justify-content: flex-start;
align-items: center;
text-align: left;
list-style: none;
font-size: 1.25rem;
margin: 0;
line-height: 1;
padding: 4px 5px 4px 5px;

> span {
  max-width: 70%;
  overflow-wrap: break-word;
}

:not(:first-of-type) {
  border-color: #9e9e9e;
  border-style: solid;
  border-width: 1px 0 0 0;
}

> *:not(:first-child) {
  margin-left: 10px;
} 
`;

const List = styled.ul`
display: flex;
flex-flow: column;
width: 100%;
height: auto;
padding: 0;
margin: 0;
align-items: center; 
align-self: center;

@media only screen and (min-width: 1280px) {
  width: 60%;
}
`;

export const sentencify = (phrases) => (
  <Fragment>
    {phrases.map(el => <Sentence sentence={el} key={el} />)}
  </Fragment>
);

export const Sentence = ({ sentence }) => (
  <Item>
    <HeartMultipleOutlineIcon color="hsl(348, 100%, 61%)" />
    <span>
      {sentence}
    </span>
  </Item>
);

export const Sentences = ({ children, className }) => (
  <List className={className}>
    {children}
  </List>
);

Sentence.prototype.propTypes = {
  sentence: PropTypes.string.isRequired,
};