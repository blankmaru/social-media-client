import React, { useState } from 'react';
import {
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
} from "reactstrap";
import { FaHeart, FaComment, FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from 'axios';

const PostItem = props => {
    const deleteToggle = () => {
        axios   
            .delete(`http://localhost:8080/explore/${props.post._id}`)
            .then(() => console.log('Post deleted'))
            .catch(err => console.error(err));
            
        setTimeout(() => {
            window.location = "/explore";
        }, 1500);
    };

    return (
        <ListGroupItem>
            <ListGroupItemHeading>{props.post.title}</ListGroupItemHeading>
            <ListGroupItemText>{props.post.content}</ListGroupItemText>
            {props.post.likes} <FaHeart style={{ cursor: "pointer" }} />{" "}
            {props.post.comments} <FaComment />{" "}
            <FaTrashAlt
                style={{ float: "right", cursor: "pointer" }}
                onClick={deleteToggle}
            />
        </ListGroupItem>
    );
};

export default PostItem;