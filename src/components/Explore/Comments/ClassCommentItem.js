import React from 'react';
import { ListGroupItem, ListGroupItemText } from 'reactstrap'
import axios from 'axios';
import CommentItem from './CommentItem';

export default class ClassComment extends React.Component {
    state = {
        comment: {}
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/api/comments/${this.props.comment}`)
            .then(res => {
                this.setState({ comment: res.data });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <CommentItem comment={this.state.comment} />
        )
    }
}