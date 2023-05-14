import { Modal, Row } from "antd";
import byte from "./images/byte.png";

export default function ProfileModal(props) {
    const { open, toggleProfileModal } = props;

    return (
        <Modal
            visible={open}
            onCancel={toggleProfileModal}
            footer={[]}
            bodyStyle={{ paddingTop: '20px' }}
        >
            <Row justify="center">
                <img src={byte} />
            </Row>
            <Row justify="center">
                <h1>UNDER CONSTRUCTION</h1>
                <p>Check back later to customize your profile!</p>
            </Row>
        </Modal>
    );
}