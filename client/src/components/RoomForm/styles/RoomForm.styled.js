import styled from "styled-components";

// wrapper
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

// heading
export const FormHeading = styled.h1`
  font-size: 2.5rem;
  padding: 20px 0;
  color: dimgrey;
`;

// input fields
export const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border: 1px solid #ccc;
  outline: none;
`;

export const FormSubmit = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  outline: none;
  border-radius: 5%;

  :hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;
