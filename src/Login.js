let handleClick=(e)=> {
    e.preventDefault();
    alert("Welcome!!");
    console.log('You clicked submit.');
}
export default function Login() {
    return (
        <>
            <label name="fnameLabel">First name:</label>
            <input type="text" id="fname" name="fname" /><br /><br />
            <label name="lnameLabel">Last name:</label>
            <input type="text" id="lname" name="lname" /><br /><br />
            <input type="submit" value="Submit" onClick={handleClick} />
        </>
    );
}


