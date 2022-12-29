import { useState, useRef } from "react";

import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Modal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

export default function UserForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addNewUser(event) {
    event.preventDefault();
    console.log(nameInputRef);
    console.log(nameInputRef.current.value);
    nameInputRef.current.placeholder = "dinamically Placeholder";
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    let isValidated = validateUserInput(enteredName, enteredUserAge);
    if (isValidated) {
      props.onAddNewUser({
        name: enteredName,
        age: enteredUserAge,
        id: Math.random(),
      });
      clearData();
    }
  }

  function validateUserInput(userName, age) {
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return false;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age ( age > 0 )",
      });
      return false;
    }
    return true;
  }
  // function userNameChangeHandler(event) {
  //   let value = event.target.value;
  //   setEnteredUserName(value);
  // }

  // function ageChangeHandler(event) {
  //   let value = event.target.value;
  //   setEnteredAge(value);
  // }

  function errorHandler() {
    setError(null);
  }
  function clearData() {
    // setEnteredAge('');
    // setEnteredUserName('');
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form className={`${styles["user-form"]}`} onSubmit={addNewUser}>
          <label htmlFor="userName">Username: </label>
          <input
            type="text"
            // value={enteredUserName}
            id="userName"
            placeholder="Put you Username Here!"
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          {/* <p>{nameInputRef.current.placeholder}</p> */}
          <label htmlFor="userYear">Age (Years) </label>
          <input
            type="text"
            // value={enteredAge}
            id="userYear"
            placeholder="Put your age in years here!"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button onClick={addNewUser}>Add New user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
