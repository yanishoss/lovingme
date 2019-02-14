import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";
import CommentPlusIcon from "mdi-react/CommentPlusIcon";
import { Sentences, sentencify } from "../components/Sentences";
import { PageTitle } from "../components/PageTitle";
import { encode } from "../services/parser";

const Container = styled.div`
display: flex;
flex-flow: column;
width: 100%;
height: 100%;
justify-content: center;

.controls {
  margin-top: 30px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  > *:not(:first-child) {
    margin-top: 10px;
  }
}

.title {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

.name-box {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.message-box {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  > *:not(:first-child) {
    margin-top: 10px;
  }
}

.button-add {
  width: 100%;
  min-height: 40px;
  border: solid 2px hsl(348, 100%, 61%);
  outline: none; 
  background: #fff;
  border-radius: 10px;
  align-self: center;
  font-size: 0.9rem;
  line-height: 0;
  color: hsl(348, 100%, 61%);    
  transition: all 0.5s ease-out;
  padding: 0;

  > svg path {
    fill: hsl(348, 100%, 61%);
  }

  :hover {
    border: none;
    color: #fff;
    background: hsl(348, 100%, 61%);

    > svg path {
      fill: #fff;
    }
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
}

.button-add {
  width: 100%;
  min-height: 40px;
  border: solid 2px hsl(348, 100%, 61%);
  outline: none; 
  background: #fff;
  border-radius: 10px;
  align-self: center;
  font-size: 0.9rem;
  line-height: 0;
  color: hsl(348, 100%, 61%);    
  transition: all 0.5s ease-out;
  padding: 0;

  > svg path {
    fill: hsl(348, 100%, 61%);
  }

  :hover {
    border: none;
    color: #fff;
    background: hsl(348, 100%, 61%);

    > svg path {
      fill: #fff;
    }
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
}

.button-submit {
  width: 100%;
  min-height: 40px;
  border: solid 2px hsl(348, 100%, 61%);
  outline: none; 
  background: #fff;
  border-radius: 10px;
  font-size: 0.9rem;
  color: hsl(348, 100%, 61%);    
  transition: all 0.5s ease-out;
  padding: 0;
  align-self: center;

  :hover {
    border: none;
    color: #fff;
    background: hsl(348, 100%, 61%);
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
}

.input {
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  padding: 10px;
  color: hsl(348, 100%, 61%);
  background: none;
  border-radius: 20px;
  border: solid 2px hsl(348, 100%, 61%);

  ::placeholder {
    color: #9e9e9e;
  }

  :focus {
    outline: none;
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
}

.sentences {
  margin: 20px 0 20px 0;
}
`;

export const Builder = ({ history }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sentences, setSentences] = useState([]);

  const handleAddSentence = () => {
    if (message && !sentences.includes(message)) {
      setSentences([...sentences, message]);
      setMessage("");
    }
     
  };

  const handleSubmit = () => {
    if (!name)
      alert("Votre chéri(e) a un nom !");

    const encoded = encode({
      name,
      sentences,
    });

    history.push(`/love?m=${encoded}`);
  };

  return (
    <Fragment>
      <PageTitle title="Message d'amour" />
      <Container>
        <div className="title">
          <h1 className="title">
            Envoie un message à ta/ton chéri(e)
          </h1>
        </div>

        <div className="controls">
          <div className="name-box">
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Le nom de ta/ton chéri(e)"></input>
          </div>
          <div className="message-box">
            <input className="input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tu es pour moi..."></input>
            <button className="button-add" onClick={handleAddSentence}>
              <CommentPlusIcon color="#fff" />
            </button>
          </div>
          <button className="button-submit" onClick={handleSubmit}>
              Créer le message
          </button>
        </div>

        <Sentences className="sentences">
          {sentencify(sentences)}
        </Sentences>
      </Container>
    </Fragment>
  );
}