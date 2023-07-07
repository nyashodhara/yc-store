import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protect = (props) => {
  let Cmp = props.Cmp;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  },[])

  return (
    <>
      <Cmp />
    </>
  )
}

export default Protect