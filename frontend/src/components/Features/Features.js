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
          setLoading(false);
          toastr.success("Successfully subscribed");
        })
        .catch((error) => {
          setLoading(false);
          toastr.error("There was an error while subscribing");
        });
      setEmail("");
    } else {
      toastr.info("Invalid email");
    }
  };
  return (
    <div className="features">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
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
                {!loading ? (
                  <img src={spinner} className="h-4 w-4" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
