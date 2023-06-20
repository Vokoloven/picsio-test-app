import styled from "styled-components"

export const StyledContainer = styled("div")`
  max-width: 100%;
  margin: 0 auto;
  padding-left: ${(p) => p.theme.space[2]};
  padding-right: ${(p) => p.theme.space[2]};
`
