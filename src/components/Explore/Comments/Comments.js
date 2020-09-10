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
  ListGroup, 
  ListGroupItem,
  Input
} from "reactstrap";
import axios from "axios";

import ClassComment from './ClassCommentItem';

const Comments = props => {
    const [comment, setComment] = useState('');

    const onCommentChange = e => {
        setComment(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));

        const newComment = {
            userAvatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124546598/original/8c50012ce1a9add1ce367141bfce829e96d0063b/draw-a-cute-anime-manga-girl-face.png',
            content: comment,
            author: user.username,
            likes: 0,
            dislikes: 0,
            date: Date.now()
        }

        axios.post(`http://localhost:8080/api/comments/add/${props.post}`, {
            comment: newComment
        })
            .then(() => console.log(newComment))
            .catch(err => console.error(newComment, user));
        
    };

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalBody>
                <Form onSubmit={onSubmit}>
                <FormGroup style={{display: 'flex'}}>
                    <Input
                        value={comment}
                        onChange={onCommentChange}
                        type="text"
                        name="comment"
                        autoComplete="off"
                        placeholder="Type comment here"
                    />
                    <Button color="secondary">ADD</Button>
                </FormGroup>
                </Form>
                <ListGroup>
                    {(props.comments.length > 0) ? props.comments.map(comment => (
                        <ClassComment comment={comment} key={comment._id} />
                    ))
                    : null }
                </ListGroup>
            </ModalBody>
        </Modal>
    )
}

export default Comments;