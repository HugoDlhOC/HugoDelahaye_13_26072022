import PropTypes from "prop-types";

export const BankCard = ({
  accountTitle,
  accountAmount,
  accountAmountDescription,
}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{accountAmountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

BankCard.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired,
  accountAmountDescription: PropTypes.string.isRequired,
};
