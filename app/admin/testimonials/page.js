"use client";
import useInput from "../hooks/use-input";

export default function TestimonialsAdmin() {
  // Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Testimonial
  const {
    value: enteredTestimonial,
    isValid: enteredTestimonialIsValid,
    hasError: testimonialInputHasError,
    valueInputChangeHandler: testimonialInputChangeHandler,
    valueInputBlurHandler: testimonialInputBlurHandler,
    reset: resetTestimonialInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredTestimonialIsValid) {
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
    resetTestimonialInput();
  };

  const inputClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  // Refactor this code

  const nameInputClasses = nameInputHasError
    ? `${inputClasses} outline outline-red-400`
    : inputClasses;
  const testimonialInputClasses = testimonialInputHasError
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
          <label htmlFor="name">Name</label>
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
          <label htmlFor="name">Testimonial</label>
          <input
            className={testimonialInputClasses}
            type="url"
            id="testimonial"
            onChange={testimonialInputChangeHandler}
            onBlur={testimonialInputBlurHandler}
            value={enteredTestimonial}
          />
          {testimonialInputHasError && (
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
