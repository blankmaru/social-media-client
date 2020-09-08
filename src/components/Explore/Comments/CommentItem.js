import React, { useState, useEffect } from 'react';
import { ListGroupItem, ListGroupItemText } from 'reactstrap'
import axios from 'axios';

const Comment = props => {
    const [comment, setComment] = useState({ author: '' });
    const [author, setAuthor] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/comments/${props.comment}`)
            .then(res => {
                setComment(res.data);
                console.log(res.data.author)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <ListGroupItem>
            <ListGroupItemText>{comment.content}</ListGroupItemText>
            <ListGroupItemText>{author}</ListGroupItemText>
        </ListGroupItem>
    )
}

export default Comment;