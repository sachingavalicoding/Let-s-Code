import { useState } from "react";

const UserForm = () => {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        email: "",
        isMale: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted", userData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setUserData({
            ...userData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <h2>User Form</h2>
            </div>

            <div className="row">
                <input
                    type="text"
                    name="firstname"
                    value={userData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                />
            </div>

            <div className="row">
                <input
                    type="text"
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                />
            </div>

            <div className="row">
                <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                />
            </div>

            <div className="row">
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
            </div>

            <div className="row">
                Are you male?
                <input
                    type="checkbox"
                    name="isMale"
                    checked={userData.isMale}
                    onChange={handleChange}
                />
            </div>

            <div className="row">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default UserForm;