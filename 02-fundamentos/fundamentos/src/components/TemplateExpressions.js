import MyComponent from "./MyComponent"

/* 
TEMPLATE EXPRESSIONS: 
    --> Permite executar JS no JSX e tambem interpolar variaveis;
    --> A sintaxe é: { algumCodigoEmJS } 
    --> Tudo que esta entre chaves é processado pelo JS e nos retorna uma resultado;
*/
const TemplateExpressions = () => {
   
   const carName = 'Mustang' 
   const brandCarName = "Ford"
   /* const data = {
        id: 125635,
        color: 'black',
        year: 1967,
   }
 */
   
    return(
        <div>
            <h3> {brandCarName} {carName} is the best car ever! </h3>
           {/*  <p>id: {data.id}<br/>Color: {data.color}<br/>Year: {data.year}</p> */}
            {/* outro exemplo */}
            <p>Um outro exemplo de uso de TEMPLATE EXPRESSIONS: 4 X 4  = {4 * 4}</p>
            {/* reaproveitando componentes */}
            <MyComponent></MyComponent>
        </div>
    )
}

export default TemplateExpressions