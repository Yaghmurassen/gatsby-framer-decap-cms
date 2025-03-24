import * as React from 'react';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout';
import Adresse from '../../components/Adresse';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    formData.append('user_name', this.state.name);
    formData.append('user_email', this.state.email);
    formData.append('message', this.state.message);
    formData.append('contact_number', (Math.random() * 100000) | 0);
    formData.append('lib_version', '3.12.1');
    formData.append('service_id', 'service_2sinc1q');
    formData.append('template_id', 'template_a0cl3sq');
    formData.append('user_id', 'WnnE6r6d_JR7R1evt');

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      mode: 'cors',
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section-page">
          <div className="container">
            <div className="content">
              <h2 className="section-title">Contact</h2>

              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="form-contact m-auto max-w-[60%] bg-[#4a8268] p-12 rounded-md text-center my-32"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Adresse />
        </section>
      </Layout>
    );
  }
}
