import React, { useState, useEffect } from "react";
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
  Alert
} from "reactstrap";
import axios from "axios";

const EditPost = (props) => {
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

    const likes = props.post.likes;
    const comments = props.post.comments;

    const updatedPost = {
      title,
      content,
      likes,
      comments,
      id: props.post._id,
    };

    axios
      .post(
        `http://localhost:8080/explore/update/${props.post._id}`,
        updatedPost
      )
      .then(() => setStatus(true));

    setTimeout(() => {
      window.location = "/explore";
    }, 1500);
  };

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Update Post</ModalHeader>
      <ModalBody>
      {status ? (
          <Alert color="primary">Post successfully updated!</Alert>
        ) : null}
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              value={title}
              onChange={onTitleChange}
              autoComplete="off"
              type="text"
              name="title"
              placeholder={props.post.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="title">Text Content</Label>
            <Input
              value={content}
              onChange={onContentChange}
              autoComplete="off"
              type="textarea"
              name="text"
              placeholder={props.post.content}
            />
          </FormGroup>
          <Button color="primary">Update</Button>
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

export default EditPost;
