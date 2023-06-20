import styled from "styled-components";

export const StyledHomeBox = styled("div")`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 100px);

  padding-top: 100px;
  /* padding-bottom: 25px; */

  background-image: linear-gradient(
    to bottom right,
    #938faa 10%,
    #fed339 30%,
    #e8d133 65%
  );
  background-size: cover;
`;
