import styled from "styled-components";

export const ChatWrapper = styled.div`
  background-color: #fbfbfb;
  width: 300px;
`;

export const ChatHeader = styled.div`
  background-color: #4caf50;
  width: 100%;
  color: white;
  padding: 14px 20px;
  border-radius: 10px 10px 0 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatBody = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 250px;
`;

export const ChatInput = styled.input`
  padding: 10px 5px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5%;
`;

export const ChatFooter = styled.div`
  padding: 20px 5px 5px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CloseChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const ChatMessage = styled.div`
  display: flex;
  padding: 10px;
  font-weight: 500;
`;

export const SendButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 8px;
  border: none;
  outline: none;
  border-radius: 5%;

  :hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;
