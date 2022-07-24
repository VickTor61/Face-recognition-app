import "./Form.css";

const Form = ({ buttonSubmit, inputHandler }) => {
  return (
    <div className="container">
      <div className="form_container">
        <input type="text" placeholder="Put an image url" onChange={inputHandler} />
        <button onClick={buttonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default Form;
