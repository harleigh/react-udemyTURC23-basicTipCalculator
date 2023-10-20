export function BillDisplay({ billAmount }) {
  return (
    <>
      <label>Total Amount: </label>
      <span>{"$" + billAmount}</span>
    </>
  );
}
