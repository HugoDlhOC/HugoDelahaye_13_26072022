import imgGuarantee1 from "../../assets/icon-chat.png";
import imgGuarantee2 from "../../assets/icon-money.png";
import imgGuarantee3 from "../../assets/icon-security.png";

import { Guarantee } from "../Guarantee";

/**
 * component Guarantees represent alls guarantees of the bank
 * @returns {JSX.Element}
 */
export const Guarantees = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Guarantee
        imgSrc={imgGuarantee1}
        imgAlt={"Chat Icon"}
        title={"You are our #1 priority"}
        content={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />
      <Guarantee
        imgSrc={imgGuarantee2}
        imgAlt={"Money Icon"}
        title={"More savings means higher rates"}
        content={
          "The more you save with us, the higher your interest rate will be!"
        }
      />
      <Guarantee
        imgSrc={imgGuarantee3}
        imgAlt={"Security Icon"}
        title={"Security you can trust"}
        content={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
      />
    </section>
  );
};
