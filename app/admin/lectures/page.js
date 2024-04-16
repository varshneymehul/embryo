"use client";
import useInput from "../hooks/use-input";

export default function LecturesAdmin() {
  // Talk Name
  const {
    value: talkName,
    isValid: enteredTalkNameIsValid,
    hasError: talkNameInputHasError,
    valueInputChangeHandler: talkNameInputChangeHandler,
    valueInputBlurHandler: talkNameInputBlurHandler,
    reset: resetTalkNameInput,
  } = useInput((value) => value.trim() !== "");
  // Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  // Description
  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueInputChangeHandler: descriptionInputChangeHandler,
    valueInputBlurHandler: descriptionInputBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");
  // Description
  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueInputChangeHandler: dateInputChangeHandler,
    valueInputBlurHandler: dateInputBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => !isNaN(new Date(value)));

  // LinkedIn
  const {
    value: enteredLinkedin,
    isValid: enteredLinkedinIsValid,
    hasError: linkedinInputHasError,
    valueInputChangeHandler: linkedinInputChangeHandler,
    valueInputBlurHandler: linkedinInputBlurHandler,
    reset: resetLinkedinInput,
  } = useInput((value) => value.includes("https://www.linkedin.com/"));
  // Recording URL
  const {
    value: enteredRecording,
    isValid: enteredRecordingIsValid,
    hasError: recordingInputHasError,
    valueInputChangeHandler: recordingInputChangeHandler,
    valueInputBlurHandler: recordingInputBlurHandler,
    reset: resetRecordingInput,
  } = useInput((value) => value.includes("https://www.linkedin.com/"));

  let formIsValid = false;

  if (
    enteredTalkNameIsValid &&
    enteredNameIsValid &&
    enteredLinkedinIsValid &&
    enteredDescriptionIsValid &&
    enteredDateIsValid &&
    enteredRecordingIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredTalkNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetTalkNameInput();
    resetNameInput();
    resetLinkedinInput();
    resetDescriptionInput();
    resetDateInput();
    resetRecordingInput();
  };

  const inputClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  // Refactor this code
  const talkNameInputClasses = talkNameInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const nameInputClasses = nameInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const linkedinInputClasses = linkedinInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const descriptionInputClasses = descriptionInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const dateInputClasses = dateInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const errorTextClasses = "text-red-500 my-2 text-xs italic";

  const recordingInputClasses = inputClasses;
  const inputGroupClasses = "my-3";
  return (
    <div className="w-1/2 mx-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmissionHandler}
      >
        <div className={inputGroupClasses}>
          <label htmlFor="talkname">Talk Name</label>
          <input
            className={talkNameInputClasses}
            type="text"
            id="talkname"
            onChange={talkNameInputChangeHandler}
            onBlur={talkNameInputBlurHandler}
            value={talkName}
          />
          {talkNameInputHasError && (
            <p className={errorTextClasses}>Talk name must not be empty.</p>
          )}
        </div>
        <div className={inputGroupClasses}>
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="name">Description</label>
          <input
            className={descriptionInputClasses}
            type="url"
            id="description"
            onChange={descriptionInputChangeHandler}
            onBlur={descriptionInputBlurHandler}
            value={enteredDescription}
          />
          {descriptionInputHasError && (
            <p className={errorTextClasses}>Description must not be empty.</p>
          )}
        </div>
        <div className={inputGroupClasses}>
          <label htmlFor="name">Date of talk</label>
          <input
            className={dateInputClasses}
            type="date"
            id="date"
            onChange={dateInputChangeHandler}
            onBlur={dateInputBlurHandler}
            value={enteredDate}
          />
          {dateInputHasError && (
            <p className={errorTextClasses}>Date must not be empty.</p>
          )}
        </div>

        <div className={inputGroupClasses}>
          <label htmlFor="name">Recording URL</label>
          <input
            className={recordingInputClasses}
            type="url"
            id="recording"
            onChange={recordingInputChangeHandler}
            onBlur={recordingInputBlurHandler}
            value={enteredRecording}
          />
        </div>

        <div className={inputGroupClasses}>
          <label className="block" htmlFor="file_input">
            Upload file
          </label>
          <input
            className="file:h-12 file:rounded-tl-md file:rounded-bl-md file:border-none block w-full text-green-800 border border-gray-300 rounded-lg cursor-pointer bg-green-200 focus:outline-none"
            id="file_input"
            type="file"
          />
          <p class="mt-1 text-sm" id="file_input_help">
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
