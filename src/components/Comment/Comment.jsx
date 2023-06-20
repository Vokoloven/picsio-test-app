/* eslint-disable react/prop-types */
import { Box } from "style/Box";
import { StyledAvatarBox } from "./style/StyledAvatarBox";
import { StyledCommentBox } from "./style/StyledCommentBox";
import { StyledNameBox } from "./style/StyledNameBox";
import { DeleteButton } from "components/Buttons/";
import { StyledCloseIcon } from "components/Buttons/DeleteButton";

export const Comment = ({ body, user, id, onClickHandler }) => {
  return (
    <StyledCommentBox>
      <StyledAvatarBox>
        {user?.username.slice(0, 2).toUpperCase()}
      </StyledAvatarBox>
      <StyledNameBox>
        <Box as="span" pl={2}>
          {user?.username}
        </Box>
      </StyledNameBox>
      <DeleteButton
        type={"button"}
        aria-label={"Delete Button"}
        onClick={onClickHandler.bind(null, id)}
      >
        <StyledCloseIcon />
      </DeleteButton>
      <Box px={3} pt={5} pb={2}>
        {body}
      </Box>
    </StyledCommentBox>
  );
};
