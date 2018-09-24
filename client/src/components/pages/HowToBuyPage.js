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
            <li>
              ознакомиться с правилами и условиями Публичной оферты и нажать
              кнопку «Перейти к оплате»;
            </li>
          </ul>
          <div>
            ВНИМАНИЕ! При покупке билетов некоторых мероприятий/событий нельзя
            размещать в одном заказе несколько мероприятий/событий одновременно.
            Более подробную информацию уточняйте у модерации
            <br />
          </div>
          <p />
          <hr />
          <h4>Для иногородних клиентов:&nbsp;</h4>
          <p>
            Если Вы находитесь в другом городе и хотите приобрети билеты на
            мероприятие, необходимо воспользоваться одним из способов оплаты
            заказа:
          </p>
          <ul>
            <li>
              с помощью банковской карты через Интернет (MasterCard, MasterCard
              Electronic, Maestro, Visa, Visa Electron);
            </li>
            <li>
              с помощью банковского перевода (для юридических лиц - необходимо
              предварительно связаться с модерацией
            </li>
            <li>
              с помощью системы Мобильный платеж Сбербанка;
              <br />
            </li>
            <li>с помощью системы Alfa-Click.</li>
          </ul>
          <p>
            <b>
              <strong>
                Оплаченные билеты можно получить в любой день, в том числе в
                день мероприятия, в собственных&nbsp;кассах компании;
              </strong>
            </b>
          </p>

          <p>
            <strong style={{ backgroundColor: "initial" }}>
              Доставка&nbsp;оплаченных билетов осуществляется по Москве и
              ближайшему Подмосковью.
            </strong>
            <br />
          </p>
          <p>
            <strong style={{ backgroundColor: "initial" }}>
              При получении оплаченных билетов необходимо предъявить паспорт и
              банковскую карту, которой производилась оплата. При оплате
              квитанцией в банке - чек, подтверждающий оплату.
            </strong>
          </p>
          <p>
            <b style={{ backgroundColor: "initial" }}>
              Внимание!&nbsp;Заказ, предварительно оплаченный банковской картой,
              может получить любой человек, предъявив свой паспорт, доверенность
              от владельца банковской карты, которой производилась оплата и{" "}
              <b>копию паспорта владельца банковской карты</b>
              .&nbsp;
            </b>
            <br />
          </p>
          <p>
            <span
              style={{
                backgroundColor: "initial",
                color: "rgb(0, 0, 0)",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              Сервисный сбор:&nbsp;
            </span>
            <br />
          </p>
          <p>
            При покупке билетов в кассе по предварительному бронированию или без
            предварительного бронирования взимается сервисный сбор в размере 10%
            от стоимости билетов.&nbsp;
            <br />
          </p>
          <hr />
          <h4>Срок действия брони:&nbsp;</h4>
          <p>
            Срок бронирования билетов составляет стандартно не более 48 часов.
            По некоторым мероприятиям срок брони может быть сокращен. По
            истечению срока бронирования заказ автоматически аннулируется.
            Билеты снова поступают в продажу.&nbsp;
          </p>
          <p>Исключения составляют заказы, оформленные на доставку.</p>
          <p>
            ВНИМАНИЕ! При заказе от 10 и более билетов на одно мероприятие выкуп
            в день оформления заказа!
          </p>
          <hr />
          <p />
          <p />
          <hr />
          <p />
          <h4>Доставка билетов:&nbsp;</h4>
          <p>
            Вы можете оформить заказ с доставкой билетов самостоятельно на сайте
            или связавшись с модерацией;
          </p>
          <p>
            Доставка билетов осуществляется ежедневно с 10 до 19 часов. <br />
          </p>
          <p>
            При оформлении доставки в заказе необходимо выбрать способ получения
            билетов "Доставка", указать дату и интервал времени доставки и
            максимально подробно заполнить поле "Адрес доставки".
          </p>
          <p>Доставка осуществляется по Москве и ближайшему Подмосковью.</p>
          <p />
          <hr />
          <h4>Стоимость доставки:</h4>
          <ul>
            <li>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                Доставка в пределах МКАД &nbsp;
              </span>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                450 руб
              </span>
            </li>
            <li>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                Доставка в Новопеределкино, Южное Бутово, Куркино, Митино,
                Северное Бутово, Солнцево, Новокосино, Жулебино &nbsp;
              </span>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                600 руб
              </span>
            </li>
            <li>
              Доставка в Красногорск, Люберцы, Кожухово, Реутов, Одинцово,
              Балашиха, Зеленоград &nbsp;
              <span
                style={{ backgroundColor: "initial", lineHeight: "1.45em" }}
              >
                750 руб
              </span>
              <br />
            </li>
            <li>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                Доставка в Мытищи, Королев, Видное, Дзержинский, пос. Рублево,
                Долгопрудный, Химки &nbsp;
              </span>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                750 руб
              </span>
            </li>
            <li>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                Доставка в Горки, Барвиха, Жуковка, Усово, Рублево-Успенское
                шоссе, Лобня, Щербинка
              </span>
              <span
                style={{ lineHeight: "1.45em", backgroundColor: "initial" }}
              >
                &nbsp;800 руб
                <br />
                <br />
              </span>
            </li>
          </ul>
          <ul>
            <li>
              Доставка осуществляется не позднее 2 рабочих дней до мероприятия.
            </li>
            <li>
              Доставка в города регионов РФ, в страны СНГ и&nbsp; страны
              дальнего зарубежья не осуществляется.
            </li>
            <li>
              Перед выездом к Вам курьер созванивается с Вами, поэтому просьба
              оставлять в заказе контактные&nbsp;телефоны.
            </li>
            <li>Оплата заказов при доставке производится наличными курьеру.</li>
            <li>
              Если Вы не можете принять заказ сами, необходимо оставить
              контактный&nbsp;телефон доверенного лица при оформлении заказа.
              При доставке оплаченных билетов заказ отдается в руки владельцу
              банковской карты, которой производилась оплата, либо по
              доверенности.
            </li>
            <li>
              В случае отказа от доставки просьба заранее сообщить, позвонив в
              Call-центр по телефону +7(495)730-73-00.&nbsp;В случае полного
              отказа от заказа/ов по приезду курьера клиент обязан оплатить
              стоимость доставки!
            </li>
            <li>
              Курьер может ожидать Вас не более&nbsp;15 минут. При повторной
              поездке взимается двойная сумма доставки!
            </li>
          </ul>
          <hr />
          <h4>E-Ticket / Электронный билет</h4>
          <p>
            На некоторые мероприятия на нашем сайте действует электронный билет
            (e-ticket). Чтобы заказать электронный билет, необходимо:
          </p>
          <ul>
            <li>Выбрать получение электронного билета.</li>
            <li>
              Подтвердить свое согласие с правилами приобретения и использования
              электронного билета.
            </li>
            <li>Выбрать удобный способ оплаты.</li>
            <li>Перейти в личный кабинет.</li>
            <li>
              В личном кабинете нажать ссылку на электронный билет ("PDF").
              Распечатать полученный документ (черно-белая копия допускается).
            </li>
            <li>
              Хранить электронный билет бережно, штрих-код не деформировать. Не
              допускать попадания электронной или бумажной копии билета в чужие
              руки. Не размещать фото электронного билета в социальных сетях, не
              пересылать третьим лицам во избежание мошеннических действий.
              <br />
            </li>
            <li>
              Предъявить электронный билет при проходе на мероприятие как
              обычный билет.
            </li>
          </ul>
          <p />
          <p>
            Электронный билет не является именным. Посетить мероприятие по
            Электронному билету может любой человек, независимо от указанного на
            билете имени.&nbsp;
          </p>
          <p>
            ВНИМАНИЕ! При покупке билетов некоторых мероприятий/событий нельзя
            размещать в одном заказе несколько мероприятий/событий одновременно.
            Более подробную информацию уточняйте у операторов call-центра по
            телефону +7 495 7307300
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
