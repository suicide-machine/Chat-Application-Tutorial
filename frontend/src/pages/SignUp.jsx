import React from "react"
import GenderCheckbox from "../component/GenderCheckbox"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Signup to
          <span className="text-blue-700"> Chat Application</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="email"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-700 font-bold text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
