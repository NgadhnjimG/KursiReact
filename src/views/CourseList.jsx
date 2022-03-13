import React, { useEffect, useState } from "react";
import { Container, Nav, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import api from '../api';

export const CoursesList = () => {
  const [courses, setcourses] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (courses.length == 0) {
      getcourses().then((res) => {
        console.log(res.data);
        setcourses(res.data);
      });
    }
  }, [courses]);

  const getcourses = async () => {
    return await api.get("http://localhost:50500/shkolla/api/courses");
  };

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Emri</th>
            <th>Shkolla</th>
            <th>Departamenti</th>
            <th>Vlereso Kursin</th>
          </tr>
        </thead>
        <tbody>
          {courses.legnth == 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            courses.map((crs, index) => {
              return (
                <tr key={index} className="clickable">
                  <td>{crs.courseId}</td>
                  <td>
                    {crs.name} {crs.surname}
                  </td>
                  <td>{crs.shkolla}</td>
                  <td>{crs.departments}</td>
                  <td>
                    <Nav.Link
                      className="btn btn-info"
                      onClick={() =>
                        navigate("/course/" + crs.doctorId + "/" + crs.name)
                      }
                    >
                      Vlereso Kursin
                    </Nav.Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
};
