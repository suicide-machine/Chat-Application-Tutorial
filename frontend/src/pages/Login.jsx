import React, { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // console.log(email, password)

  const { login, loading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Login to
          <span className="text-blue-700"> Chat Application</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-blue-700 font-bold text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
