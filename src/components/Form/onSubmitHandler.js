export const onSubmitHandler = (
  e,
  response,
  localValue,
  setDeleteComment,
  setLocalValue
) => {
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
    localValue !== "" && setDeleteComment(addComment);
  } else {
    localValue !== "" &&
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
