export function BillEntry({ setBillAmount }) {
  //regular expression for a floating point number with exactly
  //two numbers past the decimal
  const floatRegExExpr = /^([0-9]+([.][0-9]{2})?|[.][0-9]{2})$/;

  //numerical entry
  const handelNumEntry = (event) => {
    const enteredVal = event.target.value;

    const passedTest = floatRegExExpr.test(enteredVal);

    if (enteredVal === "" || passedTest) {
      enteredVal !== ""
        ? setBillAmount(parseFloat(enteredVal))
        : setBillAmount(0);
    }
  };

  return (
    <>
      <label>Bill Amount:</label>
      <input type={"text"} onChange={handelNumEntry} placeholder={"0.00"} />
    </>
  );
}
