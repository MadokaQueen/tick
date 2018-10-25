import React, { Component } from "react";

import { Container, Table } from "reactstrap";

import { Link } from "react-router-dom";

import Headline from "../Headline";

class ContactsPage extends Component {
  render() {
    window.document.title = "tickets-everyday | Контактная информация";
    return (
      <React.Fragment>
        <Container>
          <Headline text="Контактная информация" />
          <Table>
            <tbody>
              <tr>
                <th scope="row">Юридический адрес</th>
                <td>
                  107553, г. Москва, ул. Большая Черкизовская, дом 30 корпус 1
                </td>
              </tr>
              <tr>
                <th scope="row">Фактический адрес</th>
                <td>
                  107553, г. Москва, ул. Большая Черкизовская, дом 30 корпус 1
                </td>
              </tr>
              <tr>
                <th scope="row">Телефон</th>
                <td>8-977-720-37-81 +7-495-127-71-19</td>
              </tr>
              <tr>
                <th scope="row">Электронная почта</th>
                <td>admin@tickets-everyday.com oooamarant000@yandex.ru</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <Link className=" my-4 nav-link pb-4" to="/requisites">
            Реквизиты
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactsPage;
