import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useMutation } from "@apollo/react-hooks";

import { ADD_USER } from "./queries";

function UserForm() {

  const [addTodo, { loading: queryLoading, error: queryError, data }] = useMutation(ADD_USER);

  if (queryError) { window.scrollTo(0, 0); }

  if (typeof data !== "undefined") {

    window.scrollTo(0, 0);

    let userForm = document.getElementsByName('userForm')[0];
    userForm.reset();
    
  }

  return (

    <div className="wrapper wrapper-full-page">

      <div className="full-page login-page">

        <div className="content">

          <div className="container">

            <div className="row">

              <div className="col-md-6 col-sm-6 col-md-offset-3">

                <Formik
                  initialValues={{ fullName: '', email: '', phone_number: '', address: '', zip_code: '', doc_file: '' }}
                  validationSchema={Yup.object().shape({
                    fullName: Yup.string().required('Full Name is required!'),
                    email: Yup.string().email('Email is invalid!').required('Email is required!'),
                    phone_number: Yup.string().required('Phone number is required!').matches(/^(\([0-9]{3}\)\s|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/, "Phone number is not valid!"),
                    address: Yup.string().required('Address is required!'),
                    zip_code: Yup.number().required('Zip Code is required').test('len', 'Zip code must have 6 character!', zip_code => zip_code && zip_code.toString().length === 6),
                    doc_file: Yup.string().required('Please atleast a file!')
                  })}
                  onSubmit={fields => {
                    addTodo({
                      variables: {
                        name: fields.fullName,
                        email: fields.email,
                        phoneNumber: fields.phone_number,
                        zipCode: fields.zip_code,
                        address: fields.address,
                        fileName: fields.doc_file,
                      }
                    });

                  }}
                  render={({ errors, status, touched }) => (

                    <Form name="userForm">

                      <div className="card card-login">

                        <div className="card-header text-center" data-background-color="red">
                          <h4 className="card-title">WELCOME</h4>
                        </div>

                        {queryError &&

                          <div className="alert alert-danger">

                            <strong> {queryError.message}</strong>

                          </div>

                        }

                        {typeof data !== "undefined" &&

                          <div className="alert alert-success">

                            <strong>Data added successfully</strong>

                          </div>

                        }

                        <div className="card-content">

                          <div className="form-group">
                            <label htmlFor="fullName">Name</label>
                            <Field name="fullName" type="text" className={'form-control' + (errors.fullName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="phone_number">Phone Number</label>
                            <Field name="phone_number" type="text" placeholder='(123) 456-7899' className={'form-control' + (errors.phone_number && touched.phone_number ? ' is-invalid' : '')} />
                            <ErrorMessage name="phone_number" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field component="textarea" rows="2" cols="20" name="address" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="zip_code">Zip Code</label>
                            <Field name="zip_code" type="text" className={'form-control' + (errors.zip_code && touched.zip_code ? ' is-invalid' : '')} />
                            <ErrorMessage name="zip_code" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="doc_file">Upload</label>
                            <Field name="doc_file" type="file" className={'form-control' + (errors.doc_file && touched.doc_file ? ' is-invalid' : '')} />
                            <ErrorMessage name="doc_file" component="div" className="invalid-feedback" />
                          </div>

                          <div className="form-group">
                            <button type="submit" className="btn btn-info mr-2">Register</button>
                            <button type="reset" className="btn btn-info">Reset</button>
                          </div>

                        </div>

                      </div>

                    </Form>
                  )}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default UserForm;