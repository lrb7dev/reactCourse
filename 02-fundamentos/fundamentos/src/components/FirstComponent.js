import MyComponent from "./MyComponent"

//creation of the first component
const FirstCompoent = () => {
    //about comments: outside of jsx, that's the form to comment

    return (
        //comment
        <div>
            {/**about comments: inside of jsx, that's the form to comment */}    
            {/** correct comment form */}
            <h2>My first component!</h2>
            {/* reaproveitando componentes */}
            <MyComponent></MyComponent>
        </div>
    )    
}

export default FirstCompoent