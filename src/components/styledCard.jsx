import styled from "styled-components";

const Card = styled.div`
  border-radius: 2rem;
  over-flow: hidden;
  position: relative;
  height: 20rem;

  img {
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    text-align: center;
    color: #fff;
    bottom: 20px;
    z-index: 3;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Card;
