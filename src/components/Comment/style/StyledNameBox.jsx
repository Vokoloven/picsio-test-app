import styled from "styled-components"

export const StyledNameBox = styled("div")`
  position: absolute;

  display: flex;
  align-items: center;

  top: 0;
  left: 0;

  transform: translate(20%, -50%);

  width: 200px;
  height: 60px;

  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.textSecondary};

  background-color: ${(p) => p.theme.colors.commentUserBackground};
`
