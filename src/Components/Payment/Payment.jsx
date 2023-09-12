import React from 'react';
import classes from './payment-form.css'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Payment = () => (
  <div>
    <h3>Payment form</h3>
    <p>Required fields are followed by *<strong><abbr title='required'></abbr></strong>.</p>
    <h4>Contact information</h4>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <fieldset>
          <legend>Title</legend>
          <ul classes={classes.body}>
            <li>
              <label for='title_1'>
                <input type='radio' id='title_1' name="title" value="M."></input>
                Mr
              </label>
            </li>
            <li>
              <label for="title_2">
                <input type="radio" id="title_2" name="title" value="Ms."></input>
                Ms
              </label>
            </li>
          </ul>
        </fieldset>
        <label htmlFor="name">Name: *</label>
        <Field id="name" name="username" placeholder="Anna Kuzmina" required />

        <label htmlFor="email">E-mail: *</label>
        <Field id="mail" name="usermail" placeholder="anna@askme.com" type='email' required />

        <label htmlFor="pwd">Password: *</label>
        <Field
          id="pwd" name="password" type="password" required />

        <section>
          <h2>Payment information</h2>
          <p>
            <label for="card">
              <span>Card type:</span>
            </label>
            <select id="card" name="usercard">
              <option value="visa">Visa</option>
              <option value="mc">Mastercard</option>
              <option value="amex">American Express</option>
            </select>
          </p>
          <p>
            <label for="number">
              <span>Card number: *</span>
              <strong><abbr title="required"></abbr></strong>
            </label>
            <input type='text' id="number" name="cardnumber" placeholder="0000-0000-0000-0000" required></input>
          </p>
          <p>
            <label for="date">
              <span>Expiration date: *</span>
              <strong><abbr title="required"></abbr></strong>
              <em>formatted as mm/yy</em>
            </label>
            <input type="data" id="date" name="expiration" placeholder="MM/YY" required pattern="[0|1][1|2]/[/\d/][/\d/]"></input>
          </p>
        </section>

        <p><button type="submit">Validate the payment</button></p>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Payment />, document.getElementById('root'));

export default Payment