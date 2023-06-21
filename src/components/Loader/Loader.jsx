/* eslint-disable react/prop-types */
import { Dna } from "react-loader-spinner";
import { StyledBox } from "./style/StyledBox";
import { Box } from "@style/Box";

export const Loader = ({ isLoaded }) => {
  if (isLoaded === null) {
    return (
      <StyledBox>
        <Box as={"span"}>Loading...</Box>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </StyledBox>
    );
  }
};
