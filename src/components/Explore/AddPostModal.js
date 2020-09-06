import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import axios from "axios";

const AddPostModal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = localStorage.getItem('user');

    const newPost = {
      title,
      content,
      author: user.id,
      likes: 0,
      comments: 0,
    };

    axios
      .post("http://localhost:8080/explore/add", newPost)
      .then(() => setStatus(true));

    setTimeout(() => {
      window.location = "/explore";
    }, 1500);
  };

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Create New Post</ModalHeader>
      <ModalBody>
        {status ? (
          <Alert color="success">Post successfully added!</Alert>
        ) : null}
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              value={title}
              onChange={onTitleChange}
              type="text"
              name="title"
              autoComplete="off"
              placeholder="Type title here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="text">Content</Label>
            <Input
              value={content}
              onChange={onContentChange}
              autoComplete="off"
              type="textarea"
              name="text"
            />
          </FormGroup>
          <Button color="primary" block>ADD</Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddPostModal;