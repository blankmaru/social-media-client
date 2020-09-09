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
import Comments from './Comments/Comments';

const URL = 'http://localhost:8080/api/test/author';

const PostItem = props => {
    const [modal, setModal] = useState(false);
    const [modalComments, setModalComments] = useState(false);
    const [postAuthor, setPostAuthor] = useState('');
    const [isAuthor, setIsAuthor] = useState(false);
    const [commentsCount, setCommentsCount] = useState(0);
    const [comments, setComments] = useState({});

    const toggle = () => setModal(!modal);
    const toggleComments = () => setModalComments(!modalComments);

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

        axios.get(`http://localhost:8080/explore/${props.post._id}`)
            .then(res => {
                setCommentsCount(res.data.comments.length);
                setComments(res.data.comments);
            });
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
            <Comments post={props.post._id} isOpen={modalComments} toggle={toggleComments} comments={comments} />
            {commentsCount} {" "}
            <FaComment 
                style={{ cursor: "pointer" }}
                onClick={toggleComments} />{" "}
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