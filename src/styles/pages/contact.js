import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d4ac2b;
  height: 90vh;
`;

export const P = styled.p`
  font-family: "Outfit";
  font-weight: 500;
  font-style: normal;
  font-size: 4.3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  font-family: "Outfit";
  font-weight: 400;
  color: #000;
  background: none;
  width: 500px;
  height: 20px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  line-height: 5px;
  margin: 8px 0px;
  letter-spacing: 0.2px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const TextArea = styled.textarea`
  font-family: "Outfit";
  font-weight: 400;
  background: none;
  color: #000;
  outline: none;
  /* border-top: none;
  border-left: none;
  border-right: none; */
  margin: 8px 0px;
  letter-spacing: 0.2px;
`;
export const Button = styled.button`
  width: 100px;
  height: 25px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;
