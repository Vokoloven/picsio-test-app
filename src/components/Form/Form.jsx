/* eslint-disable react/prop-types */
import { SubmitButton } from "@components/Buttons/";
import { Box } from "@style/Box";
import { Textarea } from "./style/Textarea";

export const Form = ({
  localValue,
  onChangeHandler,
  onSubmitHandler,
  response,
  setDeleteComment,
  setLocalValue,
}) => {
  return (
    <Box
      as={"form"}
      width={"800px"}
      position={"relative"}
      onSubmit={(e) => {
        onSubmitHandler(
          e,
          response,
          localValue,
          setDeleteComment,
          setLocalValue
        );
      }}
      id={"form"}
    >
      <Textarea value={localValue} onChange={onChangeHandler} />
      <SubmitButton type="submit" aria-label={"Submit Button"}>
        Send
      </SubmitButton>
    </Box>
  );
};
