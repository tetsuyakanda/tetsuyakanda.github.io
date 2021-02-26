import React from "react"

const en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function langStyle(lang, label) {
  return (lang === `ja` && label.endsWith(`_J`)) ? `ja` : `en`;
}


const jStyle = (date_parts) => {
  return (
    <span>{date_parts[0]}年{date_parts[1]}月</span>
  )
}

const eStyle = (date_parts) => {
  return (
    <span>{en[date_parts[1]-1]} {date_parts[0]}</span>
  )
}

const Ym = ({lang, label, date_parts}) => {
  return(
    <span>
      {(langStyle(lang, label) === `ja`) ? jStyle(date_parts[0]) : eStyle(date_parts[0])}
    </span>
  )
}

export default Ym