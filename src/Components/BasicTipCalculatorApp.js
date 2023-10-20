/* Project based on project from TURC23 */

import { BillEntry } from "./BillEntry";
import { Tipper } from "./Tipper";
import { BillDisplay } from "./BillDisplay";
import { CalcButtons } from "./CalcButtons";

export default function BasicTipCalculatorApp() {
  return (
    <div className="mainApp">
      <BillEntry /> <Tipper /> <BillDisplay /> <CalcButtons />
    </div>
  );
}
