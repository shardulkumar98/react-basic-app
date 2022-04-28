import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff; //White
`;
export const MainContatiner = styled(Container)`
  height: 100vh;
  background: #000; //Black
`;

export const Head = styled.h1`
  font-family: "Outfit";
  font-weight: 500px;
  letter-spacing: 0.2px;
  line-height: 50px;
  color: #d4ac2b; //yellow
  font-size: 3.2rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 100px;
  line-height: 30px;
  letter-spacing: 0.2px;
  width: 300px;
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 5px;
  outline: none;
  color: #fff; //white
`;
export const Para = styled.p`
  color: #fc4f4f; //Red
`;
export const Button = styled.button`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  padding: 5px;
  width: 100px;
  color: #d4ac2b;
  cursor: pointer;
  border: 1px solid #d4ac2b;
  background: none;
  border-radius: 4px;
`;
// export const Message = styled(Container);
