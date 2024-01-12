import React from "react";

function Registration () {
    return (
        <div className="container registration">
            <form>
                <div class="name">
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
                </div>

                <div class="email">
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
            </form>
            <button type="submit">Sign up</button>

            <p>Already have an account?</p>
            
            <button>Login</button>

        </div>
    );
};

export default Registration;