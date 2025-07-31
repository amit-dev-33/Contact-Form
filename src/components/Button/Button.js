import style from "./button.module.css"

function Button({icon, text, isOutline, ...rest}) {
  return (
    <button {...rest} className={isOutline ? style.outline_btn : style.dark_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button