/* Project based on project from TURC23 */

import { BillEntry } from "./BillEntry";
import { Tipper } from "./Tipper";
import { BillDisplay } from "./BillDisplay";
import { CalcButtons } from "./CalcButtons";
import { useState } from "react";

export default function BasicTipCalculatorApp() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState([]);

  const calcTotalBill = () => {
    return 0;
  };
  return (
    <div className="container">
      <BillEntry billAmount={billAmount} setBillAmount={setBillAmount} />
      <Tipper label={"Tip Amount (from self):"} />
      <BillDisplay billAmount={billAmount} />
      <CalcButtons />
    </div>
  );
}
