import React, { useState } from 'react';
import {
    Modal,
    ModalBody,
    Form,
    Input,
    FormGroup,
    Button
} from 'reactstrap';

const ModalEditProfile = props => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [username, setUsername] = useState('');

    const onSubmit = e => {};

    const onUsernameChange = e => {};

    return (
        <Modal isOpen={props.open} toggle={props.toggle}>
            <ModalBody>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Input
                            value={username}
                            onChange={onUsernameChange}
                            type="text"
                            name="comment"
                            autoComplete="off"
                            placeholder={user.username}
                        />
                    </FormGroup>
                <Button color="secondary" block>EDIT</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default ModalEditProfile;