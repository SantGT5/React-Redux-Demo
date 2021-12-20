import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux"

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

  return <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Hook - But cake</button>
  </div>
}

export default HooksCakeContainer;
