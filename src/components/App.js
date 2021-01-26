import React from 'react';
import QuestionAPI from './APIs/QuestionAPI';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{

    //State
    state = {question: []}

    //Create async function for when a componenet mounts
    async componentDidMount(){
        const response =  await QuestionAPI.get("https://opentdb.com/api.php?amount=10")
        const data = response.data.results
        console.log(data)
    }

    render(){
        return(
            <div className="container">
                <h1 className="section-header text-center">Quiz Website</h1>
            </div>
        )
    }
}

export default App