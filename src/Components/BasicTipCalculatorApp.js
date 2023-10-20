/* Project based on project from TURC23 */

import { BillEntry } from "./BillEntry";
import { Tipper } from "./Tipper";
import { BillDisplay } from "./BillDisplay";
import { CalcButtons } from "./CalcButtons";
import { useState } from "react";

export default function BasicTipCalculatorApp() {
  const [mealCost, setBillAmount] = useState(0);
  const [tipAmountSelf, setTipAmountSelf] = useState(0);
  const [tipAmountFriend, setTipAmountFriend] = useState(0);

  const totalTipPercent = (tipAmountSelf + tipAmountFriend) / 2;

  return (
    <div className="container">
      <BillEntry setBillAmount={setBillAmount} />
      <Tipper
        label={"Tip Amount (from self):"}
        baseCost={mealCost}
        tipAmount={tipAmountSelf}
        setTipAmount={setTipAmountSelf}
      />
      <Tipper
        label={"Tip Amount (from friend):"}
        baseCost={mealCost}
        tipAmount={tipAmountFriend}
        setTipAmount={setTipAmountFriend}
      />
      <BillDisplay mealCost={mealCost} totalTipPercent={totalTipPercent} />
      <CalcButtons />
    </div>
  );
}
