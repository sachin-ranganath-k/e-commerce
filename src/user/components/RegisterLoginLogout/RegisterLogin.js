import React from "react"
import UserLogin from "./UserLogin"

const RegisterLogin = () => {
  return (
    <div className="container">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <UserLogin />
                </div>
                <div className="col-md-6">
                    <UserLogin />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterLogin