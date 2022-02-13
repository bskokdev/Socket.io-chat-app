import { FormHeading, FormInput, FormSubmit, FormWrapper } from "../styles";

import React from "react";

const RoomForm = ({ joinRoom, setUsername, setRoom }) => {
  return (
    <FormWrapper>
      <FormHeading>Join a room</FormHeading>
      <FormInput
        type="text"
        placeholder={"Name"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <FormInput
        type="text"
        placeholder={"Room ID"}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <FormSubmit onClick={joinRoom}>Join the room</FormSubmit>
    </FormWrapper>
  );
};

export default RoomForm;
