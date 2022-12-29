import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Wrapper from "../../Helpers/Wrapper";

function BackDrop(props) {
  return <div className={styles.backdrop} onClick={props.onHandleError} />;
}

function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onHandleError}>Okey</Button>
      </footer>
    </Card>
  );
}

export default function ErrorModal(props) {
  /* return (
    <Wrapper>
      <div className={styles.backdrop} onClick={props.onHandleError} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onHandleError}>Okey</Button>
        </footer>
      </Card>
    </Wrapper>
  ); */
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onHandleError={props.onHandleError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onHandleError={props.onHandleError}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}
