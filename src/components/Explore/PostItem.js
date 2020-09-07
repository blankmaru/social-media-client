import React, { useState, useEffect } from 'react';
import {
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Button,
} from "reactstrap";
import { FaHeart, FaComment, FaTrashAlt, FaEdit, FaUser } from "react-icons/fa";
import axios from 'axios';

import EditPost from './EditPost';

const URL = 'http://localhost:8080/api/test/author';

const PostItem = props => {
    const [modal, setModal] = useState(false);
    const [postAuthor, setPostAuthor] = useState('');
    const [isAuthor, setIsAuthor] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {  
        const user = localStorage.getItem('user');
        axios.post(`${URL}/${props.post.author}`)
            .then(res => {
                setPostAuthor(res.data.username)
                if (res.data.username === JSON.parse(user).username) {
                    setIsAuthor(true);
                }
            })
            .catch(err => console.error(err));
    }, []);

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
            <ListGroupItemText><FaUser />{postAuthor}</ListGroupItemText>
            {props.post.likes} <FaHeart style={{ cursor: "pointer" }} />{" "}
            {props.post.comments} <FaComment />{" "}
            <FaTrashAlt
                style={{ float: "right", cursor: "pointer" }}
                onClick={deleteToggle}
            />
            {isAuthor 
                ? 
                <>
                    <EditPost isOpen={modal} toggle={toggle} post={props.post} />
                    <FaEdit
                        onClick={toggle}
                        style={{ marginRight: "0.2rem", float: "right", cursor: "pointer" }}
                    /> 
                </>
                : null}
        </ListGroupItem>
    );
};

export default PostItem;