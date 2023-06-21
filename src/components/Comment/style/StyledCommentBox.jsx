import styled from "styled-components";

export const StyledCommentBox = styled("div")`
  position: relative;

  width: 800px;
  min-height: 100px;

  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);

  color: ${(p) => p.theme.colors.textPrimary};
  font-weight: ${(p) => p.theme.fontWeights.medium};

  background-color: ${(p) => p.theme.colors.commentBackground};
`;
