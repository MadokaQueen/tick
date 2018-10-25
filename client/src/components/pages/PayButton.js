import React, { Component } from "react";

const md5 = require("md5");
const uuid = require("uuid");

class PayButton extends Component {
  state = {};
  render() {
    let Shop_IDP = "1234567890";
    let Order_IDP = uuid();
    let Subtotal_P = this.props.sum * 1;
    let Customer_IDP = this.props.customer;

    let MeanType = "";
    let EMoneyType = "";

    let Card_IDP = "";
    let IData = "";
    let PT_Code = "";

    let Lifetime = 720;

    let URL_RETURN_OK = "https://www.npmjs.com/package/md5";
    let URL_RETURN_NO = "https://www.youtube.com/";

    let password = "123456";

    let Signature = md5(
      md5(Shop_IDP) +
        "&" +
        md5(Order_IDP) +
        "&" +
        md5(Subtotal_P) +
        "&" +
        md5(MeanType) +
        "&" +
        md5(EMoneyType) +
        "&" +
        md5(Lifetime) +
        "&" +
        md5(Customer_IDP) +
        "&" +
        md5(Card_IDP) +
        "&" +
        md5(IData) +
        "&" +
        md5(PT_Code) +
        "&" +
        md5(password)
    );

    console.log({
      Shop_IDP,
      Order_IDP,
      Subtotal_P,
      MeanType,
      EMoneyType,
      Lifetime,
      Customer_IDP,
      Card_IDP,
      IData,
      PT_Code,
      password
    });
    console.log({ Signature, URL_RETURN_OK, URL_RETURN_NO });

    return (
      <form action="https://wpay.uniteller.ru/pay/" method="POST">
        <input type="hidden" name="Shop_IDP" value={Shop_IDP} />
        <input type="hidden" name="Order_IDP" value={Order_IDP} />
        <input type="hidden" name="Subtotal_P" value={Subtotal_P} />
        <input type="hidden" name="Lifetime" value={Lifetime} />
        <input type="hidden" name="Customer_IDP" value={Customer_IDP} />
        <input type="hidden" name="Signature" value={Signature} />
        <input
          type="submit"
          name="Submit"
          value="Оплатить"
          className="btn btn-danger btn-block btn-lg m-4"
        />
        <input type="hidden" name="URL_RETURN_OK" value={URL_RETURN_OK} />
        <input type="hidden" name="URL_RETURN_NO" value={URL_RETURN_NO} />
      </form>
    );
  }
}

export default PayButton;
