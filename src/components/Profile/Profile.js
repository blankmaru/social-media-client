import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Profile = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('user')
  );

  const toggle = () => setOpen(!isOpen);

  return (
    <div>
      <div>
        <img
          style={{ borderRadius: "0.5rem" }}
          src="https://i.pinimg.com/originals/2c/c4/56/2cc456e2aad19112252bc886362a7d58.jpg"
          width="100%"
          alt="header"
        />
      </div>
      <div style={{ marginTop: "0.5rem", display: "flex" }}>
        <img
          style={{ borderRadius: "0.5rem" }}
          src="https://i.pinimg.com/originals/36/94/88/3694883db86f21a6b0aa0c2e0d3793b5.jpg"
          width="25%"
          height="25%"
          alt="avatar"
        />
        <div style={{ marginLeft: "0.5rem" }}>
          <Card>
            <CardBody>
              <CardTitle>Username: {currentUser.username}</CardTitle>
              <CardText>About User</CardText>
              <CardText>{currentUser.email}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle caret>Actions</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem disabled>Add to friends</DropdownItem>
            <DropdownItem disabled>Send message</DropdownItem>
            <DropdownItem divider />
            <DropdownItem disabled>Block user</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
};

export default Profile;
