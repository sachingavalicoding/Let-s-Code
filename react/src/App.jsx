import User from "./components/User.jsx";
import Counter from "./components/Counter.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { useState } from "react";
import Events from "./components/Events.jsx";
import UserForm from "./components/UserForm.jsx";
const App = () => {
    const [age, setAge] = useState(19);
    const updateAge = (value) => {
        return setAge(age + value);
    }
    return (<>
        {/* <UserProfile name={"Sachin"} age={age} role={"Software developer"} ageHandler={updateAge} /> */}
        <UserForm />
    </>

    )
}
export default App;
