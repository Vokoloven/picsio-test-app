import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/close.svg";

export const DeleteButton = styled("button")`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;

  width: 40px;
  height: 40px;

  transform: translate(50%, -50%);

  border-radius: 50%;
  border: 0;

  background-color: ${(p) => p.theme.colors.commentUserBackground};
`;

export const StyledCloseIcon = styled(CloseIcon)`
  width: 15px;
  height: 15px;
`;
