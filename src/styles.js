import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  svg {
    width: 30px;
    height: 30px;
    color: #9447d0;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 20px;
  }
`;

export default Container;
