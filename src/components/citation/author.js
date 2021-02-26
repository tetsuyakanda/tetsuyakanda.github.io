import React from "react"

const jStyle = (author) => 
  author
    .map((a) => {
      if(a.family === `神田` && a.given === `哲也`) {
        return <span key={a.family} className="itsme">{a.family} {a.given}</span>
      } else {
        return a.family + ` ` + a.given
      }
    })
    .reduce((prev, curr) => [prev, ', ', curr])


const eStyle = (author) => 
  author
    .map((a) => {
      if(a.family === `Kanda` && a.given === `Tetsuya`) {
        return <span key={a.family} className="itsme">{a.given} {a.family}</span>
      } else {
        return <span key={a.family}>{a.given} {a.family}</span>
      }
    })
    .reduce((prev, curr) => [prev, ', ', curr])

const Author = ({lang, language, author}) => {
  return(
    <span>
      {(lang === `ja` && language === `Japanese`) ? jStyle(author) : eStyle(author)}
    </span>
  )
}

export default Author
