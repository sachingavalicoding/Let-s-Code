const Events = () => {
    const handleClick = (event) => {
        console.log(event);
        console.log(event.target.innerText);
        console.log(event.currentTarget);

    }
    return (
        <>
            <button className="btn" onClick={handleClick}>Click Me</button>
        </>
    );
}

export default Events;