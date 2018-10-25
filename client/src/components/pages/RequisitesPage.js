import React, { Component } from "react";

import { Container, Table } from "reactstrap";

import Headline from "../Headline";

class RequisitesPage extends Component {
  render() {
    window.document.title = "tickets-everyday | Реквизиты";
    return (
      <Container>
        <Headline text="Реквизиты" />
        <Table>
          <tbody>
            <tr>
              <th scope="row">
                Полное наименование Общество с ограниченной ответственностью
              </th>
              <td>«АМАРАНТ»</td>
            </tr>
            <tr>
              <th scope="row">Сокращенное название</th>
              <td>ООО «АМАРАНТ»</td>
            </tr>
            <tr>
              <th scope="row">Фирменное название</th>
              <td>Tickets Everyday</td>
            </tr>
            <tr>
              <th scope="row">Дата регистрации</th>
              <td>29.05.2018 г.</td>
            </tr>
            <tr>
              <th scope="row">ИНН</th>
              <td>9718103471</td>
            </tr>
            <tr>
              <th scope="row">КПП</th>
              <td>771801001</td>
            </tr>
            <tr>
              <th scope="row">ОГРН</th>
              <td>1187746517530</td>
            </tr>
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
            <tr>
              <th scope="row">Интернет сайт</th>
              <td>Tickets-everyday.com</td>
            </tr>
            <tr>
              <th scope="row">Директор</th>
              <td>Солопов Алексей Леонидович</td>
            </tr>
            <tr>
              <th scope="row">Расчетный счет</th>
              <td>40702810638000194851</td>
            </tr>
            <tr>
              <th scope="row">Банк</th>
              <td>ПАО Сбербанк</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default RequisitesPage;
