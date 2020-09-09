import React, { useState, useEffect } from 'react';
import { ListGroupItem, ListGroupItemText } from 'reactstrap';
import axios from 'axios';

const Comment = props => {
    const [author, setAuthor] = useState('');

    useEffect(() => {
        axios.post(`http://localhost:8080/api/test/author/${props.comment.author}`)
            .then(res => {
                setAuthor(res.data.username);
            })
            .catch(err => console.error(err));
    })

    return (
        <ListGroupItem>
            <ListGroupItemText>
                <img src={props.comment.userAvatar} style={{width: '1.5rem', height: '1.5rem', borderRadius: '1.5rem'}} /> 
                    {author}
                </ListGroupItemText>
            <ListGroupItemText>{props.comment.content}</ListGroupItemText>
        </ListGroupItem>
    )
}

export default Comment;