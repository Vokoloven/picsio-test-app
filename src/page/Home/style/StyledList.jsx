import styled from "styled-components";

export const StyledList = styled("li")`
  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[6]};
  }
`;
