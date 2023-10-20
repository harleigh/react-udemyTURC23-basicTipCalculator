const tipTypes = {
  none: 0,
  subpar: 10,
  satisfactory: 15,
  exceptional: 20,
};

export function Tipper({ label, baseCost, tipAmount, setTipAmount }) {
  const handleSelect = (e) => {
    setTipAmount(parseFloat(e.target.value));
  };

  return (
    <>
      <label>{label}</label>
      <select
        value={tipAmount}
        onChange={handleSelect}
        disabled={baseCost === 0}
      >
        <option value={tipTypes["none"]}>{tipTypes["none"]}%</option>
        <option value={tipTypes["subpar"]}>{tipTypes["subpar"]}%</option>
        <option value={tipTypes["satisfactory"]}>
          {tipTypes["satisfactory"]}%
        </option>
        <option value={tipTypes["exceptional"]}>
          {tipTypes["exceptional"]}%
        </option>
      </select>
    </>
  );
}
