import { Container } from "components/Container";
import { useState, useEffect } from "react";
import { StyledHomeBox } from "./style/StyledHomeBox";
import { Box } from "style/Box";
import { Comment } from "components/Comment";
import { Form } from "components/Form";
import { StyledList } from "./style/StyledList";
import { useData } from "hooks/useData";

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const addComment = response.reduce((prevValue, item, index) => {
      if (index === response?.length - 1) {
        prevValue.push(item);
        prevValue.push({
          id: item?.id + 1,
          body: localValue,
          postId: item.postId + 1,
          user: {
            id: item.user.id + 1,
            username: "Test",
          },
        });
      } else {
        prevValue.push(item);
      }
      return prevValue;
    }, []);

    if (response.length !== 0) {
      setDeleteComment(addComment);
    } else {
      setDeleteComment([
        {
          id: 1,
          body: localValue,
          postId: 1,
          user: {
            id: 1,
            username: "Test",
          },
        },
      ]);
    }
    setLocalValue("");
  };

  useEffect(() => {
    localStorage.setItem("textarea", localValue);
  }, [localValue]);

  const onChangeHandler = (e) => {
    setLocalValue(e.target.value);
  };

  return (
    <Container>
      <Box display={"flex"} justifycontent={"center"} alignitems={"center"}>
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
            />
          </Box>
        </StyledHomeBox>
      </Box>
    </Container>
  );
};
