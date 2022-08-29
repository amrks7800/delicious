import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;

  + a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 65px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #eb594c;
    display: grid;
    place-items: center;
    font-size: 2rem;
  }
`;
