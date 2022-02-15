import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;
export const MainContatiner = styled(Container)`
  background: #000;
`;

export const Head = styled.h1`
  color: #d4ac2b;
  padding: 10px 0px;
  font-size: 3.2rem;
`;

export const Input = styled.input`
  width: 300px;
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  margin: 25px 0px;
  padding: 5px;
  outline: none;
  color: #fff;
`;

export const Button = styled.button`
  width: 100px;
  color: #d4ac2b;
  cursor: pointer;
  border: 1px solid #d4ac2b;
  background: none;
  border-radius: 4px;
`;

export const Message = styled(Container);
