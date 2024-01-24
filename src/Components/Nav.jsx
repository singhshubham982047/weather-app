import React, { useRef } from 'react'
import './Nav.css'

const Nav = ({ fetchData }) => {
  const ref = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ref.current.value) return;
    fetchData(ref.current.value);
    ref.current.value = ""
  }
  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input ref={ref} type="text" className="searchField" />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Nav