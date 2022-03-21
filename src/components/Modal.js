import "./Modal.css";

const Modal = (props) => {
  const close = (e) => {
    if (e.target.classList.contains("modal")) props.closeModal();
  };

  return (
    <div
      className={`modal ${!props.status && "disabled"}`}
      onClick={close}
      dataset="modal"
    >
      <div className="modal-content">
        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Modal;
