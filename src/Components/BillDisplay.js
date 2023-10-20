export function BillDisplay({ mealCost, totalTipPercent }) {
  const amountInTip = (totalTipPercent / 100) * mealCost;
  const totalOwed = mealCost + amountInTip;
  return (
    <>
      <label>Cost of Meal: </label>
      <span>{"$" + mealCost}</span>

      <label>Tip Amount (at {totalTipPercent}%): </label>
      <span>{"$" + (totalTipPercent / 100) * mealCost}</span>

      <label>Total Owed: </label>
      <span>{"$" + totalOwed}</span>
    </>
  );
}
