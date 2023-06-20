import styled from "styled-components";

export const StyledAvatarBox = styled("div")`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  transform: translate(-50%, -50%);

  width: 100px;
  height: 100px;

  border-radius: 50%;

  font-size: ${(p) => p.theme.fontSizes[4]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.buttonText};

  background-color: ${(p) => p.theme.colors.commentUserBackground};
`;
