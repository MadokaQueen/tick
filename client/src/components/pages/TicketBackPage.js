import React, { Component } from "react";

import { Container } from "reactstrap";

import Headline from "../Headline";

class TicketBackPage extends Component {
  render() {
    window.document.title = "tickets-everyday | Возврат билетов";
    return (
      <Container>
        <Headline text="Как вернуть билет" />
        <div className="container text-content inner-page wow fadeIn">
          <h1>Правила возврата билетов</h1>
          <p>
            ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ НА ТО, ЧТО
            <br />
          </p>
          Приобретая билеты на нашем сайте, Вы становитесь участником Договора
          продажи билетов на культурно-зрелищные мероприятия (публичная оферта),
          в соответствии с которым наш сайт предоставляет Вам услугу
          приобретения билетов на условиях, оговоренных в договоре оферты
          <br />
          Согласие с этими условиями Вы подтверждаете фактом оплаты итоговой
          стоимости билетов. Документальным подтверждением Вашего согласия
          является чек либо квитанция об оплате итоговой стоимости билетов.
          <br />
          <br />
          <b>Порядок возврата билетов на театрально-зрелищные мероприятия:</b>
          <ul>
            <li>
              в случае отмены/замены/переноса мероприятия к возврату принимаются
              только билеты, купленные на нашем сайте;
            </li>
            <li>
              возврат билетов производится в соответствии с условиями (срок,
              время, место возврата билетов), установленными согласно
              официальному письму организатора мероприятия, полученному от нас.
              С информацией о порядке, сроках, времени и месте возврата билетов
              можно ознакомиться на сайте;
            </li>
            <li>
              <b>при возврате билетов&nbsp;</b>
              <b>
                необходимо предъявить билеты, кассовый чек либо квитанцию на
                оплату билетов, а также копию паспорта
              </b>
              ;
            </li>
            <li>
              если вы оплачивали билеты банковской картой, Вы можете получить
              деньги только по безналичному расчету, для этого вам необходимо
              сообщить нам подробные реквизиты.
            </li>
            <li>во всех остальных случаях деньги возвращаются наличными;</li>
            <li>
              возврат осуществляется <b>только </b>
              номинальной стоимости билетов!
            </li>
            <li>
              возврат по желанию можно осуществить не позднее 5 рабочих дней до
              даты начала мероприятия по согласованию с организатором
              мероприятия
            </li>
          </ul>
          Стоимость сервисного сбора и доставки НЕ ВОЗВРАЩАЕТСЯ.
          <br />
          ВНИМАНИЕ! БЛАНКИ БИЛЕТОВ С ЛЮБЫМИ ИСПРАВЛЕНИЯМИ И ЗАКЛЕЕННОЙ
          ИНФОРМАЦИЕЙ НЕ ДЕЙСТВИТЕЛЬНЫ И К ВОЗВРАТУ НЕ ПРИНИМАЮТСЯ!
          <br />
          <br />
          Для того, чтобы оформить{" "}
          <b>возврат денежных средств за электронные билеты</b>, вам нужно
          отправить нам скан следующих документов:
          <ul>
            <li>электронные билеты;&nbsp;</li>
            <li>паспорт 1-ая страница;&nbsp;</li>
            <li>
              заполненное заявление (образец выше)&nbsp;
              <br />
              <br />
            </li>
          </ul>
          <p>
            Заявление рассматривается в течение 10 рабочих дней.
            <br />
          </p>
        </div>
      </Container>
    );
  }
}

export default TicketBackPage;
