import React from "react";
import { Table, Button } from "reactstrap";

class EventTickets extends React.Component {
  render() {
    let { info } = this.props;
    let items = [];

    for (let i = 0; i < info.prices.length; i++) {
      items[i] = {
        seat: info.seats[i],
        price: info.prices[i],
        tickets: info.tickets[i]
      };
    }
    return (
      <div className="p-4">
        <Table
          borderless
          className="m-4 p-4"
          style={{ fontSize: "22px", backgroundColor: "$fff" }}
        >
          <thead>
            <tr>
              <th>Сектор</th>
              <th>Билетов</th>
              <th>Цены</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{item.seat}</td>
                <td>{item.tickets}</td>
                <td>{item.price + " р."}</td>

                <td>
                  <Button color="danger" className="btn-lg">
                    Заказать
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EventTickets;
