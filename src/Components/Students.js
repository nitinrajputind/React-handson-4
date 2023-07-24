import React, { useState } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const [data] = useState([
    {
      name: "John",
      Age: 22,
      Course: "MERN",
      Batch: "October",
      Change: <Link>Edit</Link>
    },
    {
      name: "Doe",
      Age: 26,
      Course: "MERN",
      Batch: "November",
      Change: <Link>Edit</Link>
    },
    {
      name: "Biden",
      Age: 25,
      Course: "MERN",
      Batch: "September",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Barar",
      Age: 26,
      Course: "MERN",
      Batch: "September",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Christ",
      Age: 27,
      Course: "MERN",
      Batch: "October",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Elent",
      Age: 25,
      Course: "MERN",
      Batch: "December",
      Change: <Link>Edit</Link>,
    },
    {
      name: "Harshita Sharma",
      Age: 22,
      Course: "MERN",
      Batch: "July",
      Change: <Link>Edit</Link>,
    },
  ]);
  // console.log(data);
  return (
    <div>
      <div className="pageName">
        <h1>Student Details</h1>
        <button>Add new student</button>
      </div>

      <table className="table">
      <thead>
          <tr>
            <th >Name</th>
            <th >Age</th>
            <th >Course</th>
            <th>Batch</th>
            <th >Change</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>{item.Change}</td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
};

export default Students;
