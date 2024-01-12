import React from "react";

function Login () {
    return (
        <div className="container login">
            <form>
                {/* <label>Name</label>
                <input type="text" placeholder="Name"/> */}

                <div class="email">
                    <label className="">Email</label>
                    <input type="email" placeholder="Email"/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
            </form>

            <button>Login</button>

        </div>
    );
};

export default Login;