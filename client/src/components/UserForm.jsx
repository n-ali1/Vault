/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

function UserForm() {
  const [isClicked, setIsClicked] = useState(false)
  const [user, setUser] = useState({});

  const [input, setInput] = useState(
    isClicked?{ name: "", email: "", password: "" }:{email: "", password: "" });

  const handleClick = () => { 
    return setIsClicked((prevIsClicked) => prevIsClicked? false : true );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(input);
    // Create a JSON object with form data
    const userData = user;

    try {
      // Send the JSON data to the server using an HTTP POST request
      if (isClicked) {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          userData
        );

        // Handle the server response as needed
        console.log(response.data);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          userData
        );
        // Handle the server response as needed
        console.log(response.data);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
    {isClicked && 
    <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>
      }
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Pass:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" value="login">{isClicked? 'Register': 'Login'}</button>
    </form>
      <button onClick={handleClick}>{isClicked? 'Login': 'Register'}</button>
    </>
  );
}

export default UserForm;
