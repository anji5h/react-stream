import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamForm extends Component {
  // render input error
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

  //render input
  renderInput = ({ input, id, label, meta }) => {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input {...input} id={id}></input>
        {this.renderError(meta, input["name"])}
      </div>
    );
  };

  //handle submit
  onSubmit = (value) => {
    if (this.props.isSignedIn) this.props.onSubmit(value);
    else document.querySelector("#error").classList.toggle("hidden");
  };

  render() {
    return (
      <div style={{ margin: "auto", marginTop: "100px", width: "60%" }}>
        <h3 className="ui center aligned huge blue header">{this.props.title}</h3>
        <div className="ui red warning message transition hidden" id="error">
          <i
            className="close icon"
            onClick={() => document.querySelector("#error").classList.toggle("hidden")}
          ></i>
          <div className="header">Please Sign In Before Creating Stream</div>
        </div>
        <form className="ui large form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            id="title"
            component={this.renderInput}
            label="Enter Title : "
          ></Field>
          <Field
            name="description"
            id="description"
            component={this.renderInput}
            label="Enter Description :"
          ></Field>
          <button className="large ui blue button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

//form validation
const validateForm = (formValue) => {
  let error = {};
  if (!formValue.title) error.title = "Please Provide Title";
  else if(formValue.title.length<5) error.title='Title Must Be At Least 5 Characters Long'
  if (!formValue.description) error.description = "Please Provide Description";
  return error;
};

export default reduxForm({ form: "streamForm", validate: validateForm })(StreamForm);
