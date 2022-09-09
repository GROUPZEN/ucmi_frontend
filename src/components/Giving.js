import React from "react";

const Giving = () => {
  return (
    <section className="giving">
      <div className="giving__quotation">
        <div className="giving__quotation--verse">
          "give, and it will be given to you"
        </div>
        <div className="giving__quotation--reference">luke 6:38</div>
      </div>
      <div className="giving__details">
        <div className="giving__details--numbers">
          <span>mobile money numbers</span>
          <span>0244000000 / 0244000001</span>
        </div>
        <div className="giving__details--info">
          <span>Pay with paystack online with mobile money or card</span>
        </div>
        <div className="giving__details--button">
          <button className="btn btn__pay">Pay online</button>
        </div>
      </div>
    </section>
  );
};

export default Giving;
