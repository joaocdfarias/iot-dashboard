import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 60px;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export const SmallCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  width: 500px;
  height: 500px;
  gap: 20px;

  @media (max-width: 480px) {
    width: auto;
    height: auto;
    flex-direction: column;
    gap: 10px;
    margin: 0;
  }
`;

export const SmallCards = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #1f1f1f;
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  cursor: pointer;
  grid-area: small;
  color: white;
  font-size: 1.2rem;

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  svg {
    width: 60px;
    height: 60px;
    color: #9447d0;
    margin: 2em auto 0 auto;
  }

  @media only screen and (max-width: 480px) {
    width: auto;
    height: auto;
    gap: 20px;
    text-align: left;
    align-content: center;
    flex-direction: row;
    grid-area: big;

    svg {
      margin: 0;
      width: 40px;
      height: 40px;
    }
  }
`;

export const BigCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
    width: auto;
  }
`;

export const BigCards = styled.div`
  background: ${(props) => (props.on ? "#9447D0" : "#1F1F1F")};
  border-radius: 10px;
  width: 100%;
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #f5f5f5;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-top: 20px;
    margin-left: 30px;
  }

  svg {
    width: 40px;
    height: 40px;
    color: ${(props) => (props.on ? "#1f1f1f" : "#9447D0")};
  }

  button {
    padding: 15px;
    width: 100px;
    border: none;
    border-radius: 10px;
    align-self: flex-end;
    margin-top: 15px;
    background: ${(props) => (props.off ? "#9447D0" : "#1F1F1F")};
    color: ${(props) => (props.on ? "#fafafa" : "#f1f1f1")};
    text-transform: uppercase;
    font-weight: bold;
  }

  @media only screen and (max-width: 480px) {
    width: auto;
    margin-bottom: 20px;
  }
`;
