import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../Spinner/Spinner";
import "./form.css";

export const RegisterForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [number, setNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      gender: "male",
      number: "",
    },
  });

  useEffect(() => {
    setTimeout(() => setShowForm(true), 5000);
  }, []);

  useEffect(() => {
    if (name !== "" && age !== "" && gender !== "" && number !== "") {
      return () => setShowButton(true);
    }
  }, [age, gender, name, number]);

  return (
    <>
      {showForm ? (
        <form
          onSubmit={handleSubmit((data) => {
            setShowForm(false);
            setShowSpinner(true);
            setTimeout(() => setShowSpinner(false), 2000);
            setTimeout(() => setIsLogged(true), 2000);
          })}
        >
          <div className="form-element">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              {...register("name", { required: "Name is required!" })}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="form-element">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              {...register("age", {
                required: { value: true, message: "Age is required" },
                min: { value: 0, message: "Age cannot be a negative number" },
              })}
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="Age"
            />
            <p>{errors.age?.message}</p>
          </div>
          <div className="form-element">
            <label htmlFor="gender">Gender:</label>
            <select
              {...register("gender")}
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-element">
            <label htmlFor="number">Phone Number:</label>
            <input
              type="number"
              {...register("number", {
                required: { value: true, message: "Phone number is required" },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits long",
                },
              })}
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              placeholder="Phone Number"
            />
            <p>{errors.number?.message}</p>
          </div>
          {showButton && <button className="form-element btn">Submit</button>}
        </form>
      ) : (
        <> </>
      )}
      {isLogged && (
        <div className="welcome">
          <h2>Hi {name}!</h2>
          <h3>
            Dear {name} {age < 18 ? "Not" : ""} eligible for vote
          </h3>
        </div>
      )}

      {showSpinner && <Spinner />}
    </>
  );
};
