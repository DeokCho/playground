import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { observer } from "mobx-react";

interface PropTypes {
  okBtnText?: string;
  cancelBtnText?: string;
  title?: string;
  className?: string;
  toggle: Function;
  isOpen: boolean;
}

const CommonModal: React.FC<PropTypes> = ({
  okBtnText = "확인",
  cancelBtnText = "취소",
  children,
  title = "알림",
  className = "",
  toggle,
  isOpen,
}) => {
  const handleToggle = () => {
    toggle && toggle();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={handleToggle}
        className={className}
      >
        <ModalHeader toggle={handleToggle}>
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleToggle}>
            {okBtnText}
          </Button>
          <Button color="secondary" onClick={handleToggle}>
            {cancelBtnText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CommonModal;
