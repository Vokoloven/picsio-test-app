import styled from "styled-components";

export const SubmitButton = styled("button")`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0;
  right: 0;

  width: 100px;
  height: 50px;

  transform: translate(50%, 50%);

  border: 0;

  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.5);

  color: ${(p) => p.theme.colors.buttonText};
  font-size: ${(p) => p.theme.fontSizes[3]};

  background-color: ${(p) => p.theme.colors.buttonBackground};
`;
