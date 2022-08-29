import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3rem;
  flex-direction: column;

  #logo {
    padding: 20px;
    h1 {
      color: #eb594c;
      letter-spacing: 2px;
    }
  }
`;

export const Nav = styled.nav`
  display: grid;
  place-items: center;
  margin-top: 15px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    li {
      font-size: 1.2rem;
      font-weight: 600;
      color: #a59495;

      a {
        color: inherit;
        text-decoration: none;
      }

      a.active {
        color: #eb594c;
      }
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  min-width: min(90vw, 380px);
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  caret-color: #eb594c;

  &:focus {
    outline: none;
  }

  + a button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: calc(100% - 10px);
    padding: 10px;
    background: #eb594c;
    border: none;
    box-shadow: #eb594c 0px 0px 5px;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    .icon {
      margin-right: 5px;
      transform: translateY(3%);
    }
  }
`;
