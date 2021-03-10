import React from "react";
import {
  SmallCards,
  CardsWrapper,
  BigCards,
  Container,
  SmallCardsWrapper,
  BigCardsWrapper,
} from "./styles";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import DevicesIcon from "@material-ui/icons/Devices";

function Cards() {
  return (
    <Container>
      <CardsWrapper>
        <BigCardsWrapper>
          <BigCards on>
            <EmojiObjectsIcon />
            <h1>Luz da Sala</h1>
            <button>Desligar</button>
          </BigCards>
          <BigCards off>
            <EmojiObjectsIcon />
            <h1>Luz da Sala</h1>
            <button>Ligar</button>
          </BigCards>
          <BigCards off>
            <EmojiObjectsIcon />
            <h1>Luz da Sala</h1>
            <button>Ligar</button>
          </BigCards>
        </BigCardsWrapper>
        <SmallCardsWrapper>
          <SmallCards>
            <EmojiObjectsIcon />
            <p>3 luzes ligadas</p>
          </SmallCards>
          <SmallCards>
            <PeopleAltIcon />
            <p>5 pessoas conectadas</p>
          </SmallCards>
          <SmallCards>
            <FlashOnIcon />
            <p>125kwh</p>
          </SmallCards>
          <SmallCards>
            <DevicesIcon />
            <p>20 dispositivos conectados</p>
          </SmallCards>
        </SmallCardsWrapper>
      </CardsWrapper>
    </Container>
  );
}

export default Cards;
