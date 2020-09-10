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

import ModalEditProfile from './Profile/ModalEditProfile';

const Profile = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [open, setOpn] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const toggle = () => setOpen(!isOpen);
  const tgl = () => setOpn(!open);

  return (
    <div>
      <div>
        <img
          style={{ borderRadius: "0.5rem" }}
          src={currentUser.profileBg}
          width="100%"
          alt="header"
        />
      </div>
      <div style={{ marginTop: "0.5rem", display: "flex" }}>
        <img
          style={{ borderRadius: "0.5rem" }}
          src={currentUser.avatar}
          width="25%"
          height="25%"
          alt="avatar"
        />
        <div style={{ marginLeft: "0.5rem" }}>
          <Card>
            <CardBody>
              <CardTitle>Username: {currentUser.username}</CardTitle>
              <CardText>{currentUser.email}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <ModalEditProfile open={open} toggle={tgl} />
        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle caret>Actions</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={tgl}>Edit Profile</DropdownItem>
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
