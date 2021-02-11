import React from "react"
import "./styles.css"

export default function Input(props) {
  const {
    value,
    onChange,
    onFocus,
    isFocused,
    onBlur,
    label,
    iconName,
    type,
    iconRight,
    iconRightName,
    iconRightClick,
    iconRightActive,
    prefix,
  } = props

  return (
    <label className={`d-flex bordered-bottom align-items-center`}>
      <input
        type={type || "text"}
        className="py-3 ml-3 w-100"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        style={{ backgroundColor: "transparent" }}
      />
    </label>
  )
}


