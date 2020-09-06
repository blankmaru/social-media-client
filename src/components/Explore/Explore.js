import React, { useState, useEffect } from "react";
import {
  ListGroup,
  Spinner
} from "reactstrap";
import { FaPlusCircle } from "react-icons/fa";

import PostItem from './PostItem';
import AddPostModal from './AddPostModal';

const Explore = props => {
    const [postData, setPostData] = useState([]);
    const [modal, setModal] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        setIsFetching(true);
        fetch('http://localhost:8080/explore')
            .then(res => res.json())
            .then(data => {
                setPostData(data.reverse());
                setIsFetching(false);
            });

        const user = localStorage.getItem('user');
        
        if (user) {
            setIsUser(true);
        };
    }, []);

    return (
        <>
        <h3>Latest Posts</h3>
        <div
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
        {isUser 
        ?  <><FaPlusCircle
                size="30"
                style={{
                    cursor: "pointer",
                }}
                onClick={toggle}
            />
            <AddPostModal isOpen={modal} toggle={toggle} /></>
        : null}
        </div>
        <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {isFetching ? (
          <Spinner style={{ marginTop: "1rem" }} color="warning" />
        ) : null}
      </div>
      <ListGroup style={{ marginTop: "1rem" }}>
        {postData.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </ListGroup>
      </>
    );
};

export default Explore;