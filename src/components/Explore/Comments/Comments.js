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
  ListGroupItem
} from "reactstrap";
import axios from "axios";

import ClassComment from './ClassCommentItem';

const Comments = props => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalBody>
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