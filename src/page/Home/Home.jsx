import { Container } from "@components/Container";
import { useState, useEffect } from "react";
import { StyledHomeBox } from "./style/StyledHomeBox";
import { Box } from "@style/Box";
import { Comment } from "@components/Comment";
import { Form } from "@components/Form";
import { StyledList } from "./style/StyledList";
import { useData } from "@hooks/useData";
import { onSubmitHandler } from "@components/Form/onSubmitHandler";

export const Home = () => {
  const [deleteComment, setDeleteComment] = useState([]);
  const response = useData(deleteComment);
  const [localValue, setLocalValue] = useState(() =>
    localStorage.getItem("textarea")
  );

  const onClickHandler = (id) => {
    const filteredData = response.filter((item) => item.id !== id);
    setDeleteComment(filteredData);
  };

  useEffect(() => {
    localStorage.setItem("textarea", localValue);
  }, [localValue]);

  const onChangeHandler = (e) => {
    setLocalValue(e.target.value);
  };

  return (
    <Container>
      <Box display={"flex"}>
        <StyledHomeBox>
          <Box as={"ul"}>
            {response?.length > 0 &&
              response.map(({ id, body, user }) => (
                <StyledList key={id}>
                  <Comment
                    body={body}
                    user={user}
                    id={id}
                    onClickHandler={onClickHandler}
                  />
                </StyledList>
              ))}
          </Box>
          <Box pb={5}>
            <Form
              localValue={localValue}
              onSubmitHandler={onSubmitHandler}
              onChangeHandler={onChangeHandler}
              response={response}
              setDeleteComment={setDeleteComment}
              setLocalValue={setLocalValue}
            />
          </Box>
        </StyledHomeBox>
      </Box>
    </Container>
  );
};
