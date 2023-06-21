import styled from "styled-components";

export const StyledHomeBox = styled("div")`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 116px);

  padding-top: 100px;

  background-image: linear-gradient(
    to bottom right,
    #938faa 10%,
    #fed339 30%,
    #e8d133 65%
  );
  background-size: cover;
`;
