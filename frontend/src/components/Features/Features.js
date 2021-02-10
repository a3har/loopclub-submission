import React, { useState } from "react";
import validator from "validator";
import api from "../../requests";
import "./Features.css";
import toastr from "toastr";
import "toastr/build/toastr.css";
import spinner from "../../assets/spinner.gif";
function Features() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const submit = () => {
    if (validator.isEmail(email)) {
      setLoading(true);
      api
        .createSubscription(email)
        .then((response) => {
          setTimeout(() => {
            setEmail("");
            setLoading(false);
            if (response.data.status) toastr.success("Successfully subscribed");
            else toastr.info(response.data.message);
          }, 2000);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
            // console.log(error.response.data.email[0]);
            // console.log(error.response);
            toastr.error("There was an error. Please try again later");
          }, 2000);
        });
    } else {
      toastr.info("Invalid email");
    }
  };
  return (
    <div className="features">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Want to know more?</span>
            <span className="block text-indigo-600">
              Subscribe to our newsletter today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <input
                type="text"
                value={email}
                placeholder="Email Address"
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                className="inline-flex items-center justify-center px-5 py-3 border focus:outline-none border-transparent text-base font-medium rounded-md text-gray-400 bg-white"
              />
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                onClick={submit}
                className="inline-flex items-center justify-center px-5 py-3 focus:outline-none border border-transparent text-base font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </div>

            <div className="ml-1 w-12">
              {loading ? <img src={spinner} className="" alt="" /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
