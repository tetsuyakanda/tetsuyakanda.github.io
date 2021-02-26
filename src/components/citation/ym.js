import React from "react"

const en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function langStyle(lang, label) {
  return (lang === `ja` && label.endsWith(`_J`)) ? `ja` : `en`;
}


const JStyle = ({date_parts}) => {
  return (
    <span>{date_parts[0]}年{date_parts[1]}月</span>
  )
}

const EStyle = ({date_parts}) => {
  return (
    <span>{en[date_parts[1]-1]} {date_parts[0]}</span>
  )
}

const Ym = ({lang, label, date_parts}) => {
  return (langStyle(lang, label) === `ja`) ? <JStyle date_parts={date_parts[0]} /> : <EStyle date_parts={date_parts[0]} />
}

export default Ym