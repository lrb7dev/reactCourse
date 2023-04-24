/* import { useContext } from "react"
import CounterContext from "../context/CounterContext" */
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando com HOOK
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - CONTEXT mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext"

const Home = () => {
 /*  const {counter} = useContext(CounterContext) */
const {counter} = useCounterContext()

// 5 - CONTEXT mais complexo
const {color, dispatch} = useTitleColorContext()

// 6 - alterando CONTEXT complexo
const setTitleColor = (color) => {
  dispatch({type: color})
}

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador {counter} </p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando CONTEXT complexo */}
      <div>
        <button onClick={()=>setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=>setTitleColor("BLUE")}>Azul</button>
        <button onClick={()=>setTitleColor("RESET")}>Resetar</button>
      </div>
    </div>
  )
}

export default Home