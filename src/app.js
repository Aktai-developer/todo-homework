import React from 'react'
import Todolist from "./components/todolist";

const App = () => {
    return (
        <div className="container">
         <div className='row'>
             <div className="col-md-6 offset-md-3">
                 <Todolist />
             </div>
         </div>
        </div>
    )
}

export default App;