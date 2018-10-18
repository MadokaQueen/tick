import React, { Component } from "react";

import { Container } from "reactstrap";

import Headline from "../Headline";

class HowToBuyPage extends Component {
  render() {
    window.document.title = "tickets-everyday | Как купить билет";
    return (
      <Container>
        <Headline text="Как купить билет" />
        <div
          className="container text-content inner-page wow fadeIn"
          style={{ padding: "0 5rem" }}
        >
          <h4>Для заказа билета необходимо:</h4>
          <ul>
            <li>выбрать нужное Вам мероприятие;</li>
            <li>
              выбрать нужный Вам сектор / категорию билета из имеющихся в
              списке;
            </li>
            <li>нажать на кнопку "Заказать";</li>
            <li>в окне заказа выбрать желаемое количество билетов;</li>
            <li>
              нажать на кнопку "Перейти к оплате" или "Продолжить покупки"
            </li>
            <li>нажать кнопку «Перейти к оплате»;</li>
          </ul>
          <hr />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/00-payonline-h250.png"
          />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/01-mir-h250.png"
          />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/02-visa-h250.png"
          />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/03-mastercard-h250.png"
          />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/uniteller.png"
          />
          <img
            style={{ height: "60px" }}
            className="pr-2 pb-2"
            alt=""
            src="./images/pay/maestro.png"
          />

          <p>
            Вы можете оплатить свой заказ банковской картой МИР, Visa, Visa
            Electron, Mastercard, Maestro и JCB International через
            процессинговый центр Uniteller, осуществляющий интернет-эквайринг.
          </p>

          <p>
            Для того чтобы оплатить Заказ выберите тип оплаты «оплата банковской
            картой». После подтверждения Заказа Вы будете перенаправлены на
            защищенную платежную страницу Uniteller, где Вам необходимо ввести
            данные Вашей банковской карты. После успешной оплаты Вы получите
            электронный чек на указанный Вами e-mail. Информация, указанная на
            чеке, содержит все данные о проведенной платежной транзакции.
          </p>

          <p>Гарантии безопасности</p>
          <p>
            Сервис-провайдер Uniteller защищает данные Вашей банковской карты,
            подтвержденные соответствием стандарту безопасности PCI DSS 2.0.
            Данные карты вводятся на защищенной платежной странице, передача
            информации в процессинговый центр Uniteller происходит с применением
            технологии шифрования SSL. Дальнейшая передача информации происходит
            по закрытым банковским сетям, имеющим наивысший уровень надежности.
            Uniteller не передает данные Вашей карты магазину и иным третьим
            лицам. Для дополнительной аутентификации держателя карты
            используется протокол 3D Secure. Если Ваш Банк поддерживает данную
            технологию, Вы будете перенаправлены на его сервер для ввода
            дополнительных реквизитов платежа.
          </p>

          <p>
            В случае, если у Вас есть вопросы по совершенному платежу, Вы можете
            обратиться в службу поддержки клиентов support@uniteller.ru или по
            телефону (495) 987-19-60 круглосуточно.
          </p>
          <hr />
          <p>
            Также прием платежей на сайте обеспечивает процессинговый центр
            PayOnline — официальный сервис-провайдер VISA и MasterCard. С
            помощью PayOnline более десяти миллионов владельцев банковских карт
            безопасно и удобно совершают платежи в Интернете.
          </p>
          <p>
            Для онлайн-оплаты можно использовать банковские карты МИР, Visa,
            Visa Electron, MasterCard и Maestro. Если ваша карта подписана на
            3D-Secure, авторизация вашего платежа будет проведена с помощью
            одноразового пароля.
          </p>
          <p>
            Ввод и обработка конфиденциальных платежных данных производится на
            стороне процессингового центра. Платежные данные передаются в банк в
            зашифрованном виде по защищенным каналам. Никто, даже продавец, не
            может получить введенные клиентом реквизиты банковской карты, что
            гарантирует полную безопасность его денежных средств и персональных
            данных.
          </p>
          <p>
            После успешного прохождения оплаты на электронную почту плательщика
            направляется электронная квитанция, подтверждающая совершение
            платежа и содержащая его уникальный идентификатор.
          </p>
          <p>
            В случае необходимости совершения возврата средств, деньги
            возвращаются на ту же карту, с которой была совершена оплата.
          </p>
          <p>
            Все вопросы, связанные с процессом оплаты, можно задать специалистам
            круглосуточной мультиязычной службы поддержки PayOnline по телефону
            +7 495 134-07-29 или написав письмо на support@payonline.ru.
          </p>
          <hr />

          <p>
            Электронный билет не является именным. Посетить мероприятие по
            Электронному билету может любой человек, независимо от указанного на
            билете имени.&nbsp;
          </p>

          <p>
            ВАЖНО! Не выкладывайте фото Электронного билета в социальные сети и
            не пересылать третьим лицам, во избежание мошеннических действий.
          </p>
          <p />
          <p />
          <p />
          <hr />

          <p />
          <p />
        </div>
      </Container>
    );
  }
}

export default HowToBuyPage;
