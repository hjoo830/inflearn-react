import React from "react";

const students = [
  {
    id: 1,
    name: "황효주",
  },
  {
    id: 2,
    name: "신짱구",
  },
  {
    id: 3,
    name: "김철수",
  },
  {
    id: 4,
    name: "한유리",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={student.id}>{student.name}</li>; // key 값 필수!!
      })}
    </ul>
  );
}

export default AttendanceBook;
