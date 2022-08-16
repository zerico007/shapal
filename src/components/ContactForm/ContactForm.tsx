import styled from "styled-components";
import { MdContactPage } from "react-icons/md";
import { Button, Input, TextArea } from "..";
import { FormEvent, KeyboardEvent, useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  color: var(--bg-dark);
  animation: fadeIn 0.4s ease-in-out;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, type, value, onChange }: FormInputProps) => {
  return (
    <Input
      showLabel
      label={label}
      id={`${label.toLocaleLowerCase()}-input`}
      background="#fff"
      width="300px"
      height="60px"
      margin="1rem 0"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleNameChange = (event: KeyboardEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: KeyboardEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubjectChange = (event: KeyboardEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, message, subject);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <MdContactPage size={40} color="var(--light-green)" />
      <FormInput
        label="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <FormInput
        label="Subject"
        type="text"
        value={subject}
        onChange={handleSubjectChange}
      />
      <TextArea
        showLabel
        label="Message"
        background="#fff"
        width="300px"
        height="200px"
        margin="1rem 0"
        value={message}
        onChange={handleMessageChange}
      />
      <Button theme="primary" height="40px" content="Send" type="submit" />
    </StyledForm>
  );
}
