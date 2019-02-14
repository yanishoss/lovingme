import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import loveSvg from "../assets/love.svg";
import { sentencify, Sentences } from "../components/Sentences";
import { PageTitle } from "../components/PageTitle";
import { decode } from "../services/parser";

const Container = styled.div`
display: flex;
flex-flow: column;
width: 100%;
height: 100%;

.message {
  display: block;
  font-size: 4rem;
  text-align: center;
  line-height: 4.5rem;
  margin-bottom: 30px;
  font-weight: normal;
  margin-top: 0;
}

.love {
  display: block;
  align-self: center;
  
  img {
    width: auto;
    height: 30vh;
  }
}

.button-create-yours {
  width: 60%;
  min-height: 40px;
  border: solid 2px hsl(348, 100%, 61%);
  outline: none; 
  background: #fff;
  border-radius: 10px;
  align-self: center;
  font-size: 0.9rem;
  color: hsl(348, 100%, 61%);    
  transition: all 0.5s ease-out;
  padding: 0;

  :hover {
    border: none;
    color: #fff;
    background: hsl(348, 100%, 61%);
    transform: scale(1.05);
  }

}

.sentences {
  margin: 20px 0 20px 0;
}
`;

export const Display = ({ history }) => {
  const params = new URLSearchParams(history.location.search);

  if (!params.has("m")) 
    history.push("/build");
  
  const { name, sentences } = decode(params.get("m"));

  const handleCreate = () => {
    history.push("/build");
  };

  return (
    <Fragment>
      <PageTitle title={`Je t'aime ${name}`} />
      <Container>
        <div className="love">
          <img src={loveSvg} alt="Coeur" />
        </div>
        
        <h1 className="message">
          Je t'aime {name}
        </h1>

        <button className="button-create-yours" onClick={handleCreate}>Créer ton message !</button>

        <Sentences className="sentences">
          {sentencify(sentences)}
        </Sentences>
      </Container>
    </Fragment>
  );
};

Display.prototype.propTypes = {
  name: PropTypes.string.isRequired,
  sentences: PropTypes.arrayOf(PropTypes.string),
};