"use client";
import useInput from "../hooks/use-input";

export default function TeamAdmin() {
  // Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // POR
  const {
    value: enteredPOR,
    isValid: enteredPORIsValid,
    hasError: PORInputHasError,
    valueInputChangeHandler: PORInputChangeHandler,
    valueInputBlurHandler: PORInputBlurHandler,
    reset: resetPORInput,
  } = useInput((value) => value.trim() !== "");

  // LinkedIn
  const {
    value: enteredLinkedin,
    isValid: enteredLinkedinIsValid,
    hasError: linkedinInputHasError,
    valueInputChangeHandler: linkedinInputChangeHandler,
    valueInputBlurHandler: linkedinInputBlurHandler,
    reset: resetLinkedinInput,
  } = useInput((value) => value.includes("https://www.linkedin.com/"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLinkedinIsValid && enteredPORIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredTalkNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetLinkedinInput();
    resetPORInput();
  };

  const inputClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  // Refactor this code

  const nameInputClasses = nameInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const linkedinInputClasses = linkedinInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const PORInputClasses = PORInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const errorTextClasses = "text-red-500 my-2 text-xs italic";

  const inputGroupClasses = "my-3";
  return (
    <div className="w-1/2 mx-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmissionHandler}
      >
     
        <div className={inputGroupClasses}>
          <label htmlFor="name">Member Name</label>
          <input
            className={nameInputClasses}
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className={errorTextClasses}>Name must not be empty.</p>
          )}
        </div>

        <div className={inputGroupClasses}>
          <label htmlFor="linkedin">LinkedIN profile URL</label>
          <input
            className={linkedinInputClasses}
            type="url"
            id="linkedin"
            onChange={linkedinInputChangeHandler}
            onBlur={linkedinInputBlurHandler}
            value={enteredLinkedin}
          />
          {linkedinInputHasError && (
            <p className={errorTextClasses}>LinkedIn must not be empty.</p>
          )}
        </div>
        <div className={inputGroupClasses}>
          <label htmlFor="name">Position of Responsibility</label>
          <input
            className={PORInputClasses}
            type="url"
            id="por"
            onChange={PORInputChangeHandler}
            onBlur={PORInputBlurHandler}
            value={enteredPOR}
          />
          {PORInputHasError && (
            <p className={errorTextClasses}>Description must not be empty.</p>
          )}
        </div>
     

        <div className={inputGroupClasses}>
          <label className="block" htmlFor="file_input">
            Upload image
          </label>
          <input
            required
            className="file:h-12 file:rounded-tl-md file:rounded-bl-md file:border-none file:mr-3 block w-full text-green-800 border border-gray-300 rounded-lg cursor-pointer bg-green-200 focus:outline-none"
            id="file_input"
            type="file"
          />
          <p className="mt-1 text-sm" id="file_input_help">
            PNG or JPG only (max 200Kb)
          </p>
        </div>

        <div className="my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer disabled:bg-red-300"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
