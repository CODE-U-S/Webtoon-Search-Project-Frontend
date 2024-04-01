import styled from "styled-components";

function InputText({ content, name, value, onChange }) {
  return (
    <Container>
      <InputField
        type={"text"}
        id={name}
        name={name}
        value={value}
        placeholder={content}
        onChange={onChange}
        required
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: -0.8vmin;
  margin-bottom: -0.8vmin;
  text-align: center;
`;

const InputField = styled.input`
  min-width: 26rem;
  min-height: 3rem;
  padding-left: 3vmin;
  border-radius: 8px;
  border: 1px solid gray;
  font-size: 1rem;
`;

export default InputText;
