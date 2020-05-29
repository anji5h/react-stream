import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class streamCreate extends Component {
  renderError = ({ error, touched }, name) => {
    if (touched && error) {
      document.querySelector(`#${name}`).style.borderColor = "red";
      return <p className="ui large pointing red basic label">{error}</p>;
    } else {
      if (document.querySelector(`#${name}`))
        document.querySelector(`#${name}`).style.borderColor = "#aaa";
      return <p></p>;
    }
  };
  renderInput = ({ input, id, label, meta }) => {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input {...input} id={id} style={{ border: "2px solid #aaa" }}></input>
        {this.renderError(meta, input["name"])}
      </div>
    );
  };

  onSubmit = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <form
          className="ui large form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          style={{marginTop: "50px" }}
        >
          <Field
            name="title"
            id="title"
            component={this.renderInput}
            label="Enter Title"
          ></Field>
          <Field
            name="description"
            id="description"
            component={this.renderInput}
            label="Enter Description"
          ></Field>
          <button className="large ui blue button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const validateForm = (formValue) => {
  let error = {};
  if (!formValue.title) error.title = "Please Provide Title";
  if (!formValue.description) error.description = "Please provide Description";
  return error;
};
export default reduxForm({ form: "streamCreate", validate: validateForm })(
  streamCreate
);
