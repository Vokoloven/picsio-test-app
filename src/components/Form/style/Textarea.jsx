import styled from "styled-components"

export const Textarea = styled("textarea")`
  width: calc(100% - 36px);
  min-height: 125px;

  margin-top: ${(p) => p.theme.space[4]};
  padding: ${(p) => p.theme.space[2]};

  border: 3px solid ${(p) => p.theme.colors.buttonBackground};
  outline: none;

  resize: none;

  color: ${(p) => p.theme.colors.textPrimary};
  font-weight: ${(p) => p.theme.fontWeights.medium};
`
