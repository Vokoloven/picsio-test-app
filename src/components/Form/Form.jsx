/* eslint-disable react/prop-types */
import { SubmitButton } from "@components/Buttons/";
import { Box } from "@style/Box";
import { Textarea } from "./style/Textarea";

export const Form = ({ localValue, onChangeHandler, onSubmitHandler }) => {
  return (
    <Box
      as={"form"}
      width={"800px"}
      position={"relative"}
      onSubmit={onSubmitHandler}
      id={"form"}
    >
      <Textarea value={localValue} onChange={onChangeHandler} />
      <SubmitButton type="submit" aria-label={"Submit Button"}>
        Send
      </SubmitButton>
    </Box>
  );
};
