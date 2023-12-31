function Radio({ children, value, name, defaultChecked, disabled }) {
  return (
    <div>
      <input
        type={"radio"}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id="radio"
      />
      <label for="radio">{children}</label>
    </div>
  );
}

export default Radio;
