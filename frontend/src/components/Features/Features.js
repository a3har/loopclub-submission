import React, { useState } from "react";
import validator from "validator";
import api from "../../requests";
import "./Features.css";
import toastr from "toastr";
import "toastr/build/toastr.css";
import spinner from "../../assets/spinner.gif";
function Features() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleAgeChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };
  const submit = () => {
    if (validator.isEmail(email) && validator.isInt(age) && age > 0) {
      setLoading(true);
      api
        .createSubscription(email, age)
        .then((response) => {
          setTimeout(() => {
            setEmail("");
            setAge("");
            console.log(response);
            setLoading(false);
            if (response.data.status) toastr.success("Successfully subscribed");
            else {
              console.log(response.data.message);
              toastr.info(response.data.message);
            }
          }, 5);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
            // console.log(error.response.data.email[0]);
            console.log(error.response);
            toastr.error("There was an error. Please try again later");
          }, 2000);
        });
    } else if (!validator.isInt(age) || age <= 0) {
      toastr.info("Invalid age.");
    } else {
      toastr.info("Invaid email. Please enter a valid email");
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
          <div className="mt-8 flex flex-col lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-md shadow">
              <input
                type="number"
                value={age}
                placeholder="Age"
                onChange={(e) => {
                  handleAgeChange(e);
                }}
                className="w-full items-center justify-center px-5 py-3 border focus:outline-none border-transparent text-base font-medium rounded-md text-gray-400 bg-white"
              />
            </div>
            <div className="mt-3 rounded-md shadow">
              <input
                type="text"
                value={email}
                placeholder="Email Address"
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                className="w-full items-center justify-center px-5 py-3 border focus:outline-none border-transparent text-base font-medium rounded-md text-gray-400 bg-white"
              />
            </div>
            <div className="mt-3 rounded-md">
              <button
                onClick={submit}
                className=" items-center w-full justify-center shadow px-5 py-3 focus:outline-none border border-transparent text-base font-medium rounded-md bg-red-600 text-white hover:bg-red-500"
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
