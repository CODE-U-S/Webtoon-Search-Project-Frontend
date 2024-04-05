import { useState } from "react";
import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useTheme } from "../../context/themeProvider";

function Password({ content, name, value, onChange }) {
  const ThemeMode = useTheme();

  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPwType(() => {
      if (!pwType.visible) return { type: "text", visible: true };
      else return { type: "password", visible: false };
    });
  };

  return (
    <Container>
      <InputField
        type={pwType.type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={content}
        required
        theme={ThemeMode[0]}
      />

      <EyeContainer>
        {pwType.visible ? (
          <OpenEye onClick={handlePasswordType} />
        ) : (
          <CloseEye onClick={handlePasswordType} />
        )}
      </EyeContainer>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const InputField = styled.input`
  min-width: 26rem;
  min-height: 3rem;
  padding-left: 3vmin;
  border-radius: 8px;
  border: 1px solid gray;
  font-size: 1rem;
  background-color: transparent;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

const EyeContainer = styled.div`
  margin-top: -3.6vmin;
  margin-left: 36vmin;
`;

const OpenEye = styled(IoMdEye)`
  cursor: pointer;
  width: 2vmin;
  height: 2vmin;
`;

const CloseEye = styled(IoMdEyeOff)`
  cursor: pointer;
  width: 2vmin;
  height: 2vmin;
`;

export default Password;
