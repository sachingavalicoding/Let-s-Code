const UserProfile = ({ name, age, role, ageHandler }) => {
    const ageIncreseBy = 5;
    return (<>
        <div>
            <p> My Name is {name} and my age is {age}. i'm working as {role} </p>
            <p> Increse Age : </p> <button className="btn" onClick={() => ageHandler(ageIncreseBy)}>{age}</button>
        </div>
    </>)
}

export default UserProfile;