import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function App() {
    const [developer, setDeveloper] = useState({
        language: 'python',
        yearsExperience: 0,
        isEmployed: false,
    })

    function handleChangeLanguage() {
        setDeveloper({
            language: 'javascript',
            yearsExperience: 0
        })
    }

    function handleChangeYearsExperience(event) {
        setDeveloper({
            ...developer,
            yearsExperience: event.target.value
        })
    }

    function handleToggleEmployment() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }))
    }

    return (
        <div>
            <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
            <button onClick={handleChangeLanguage}>Change language</button>

            <div>
                <input
                    type="number"
                    onChange={handleChangeYearsExperience}
                />
            </div>

            <p>I am learning {developer.language}</p>
            <p>I have {developer.yearsExperience} years of experience</p>
            <p>Employment status: {developer.isEmployed ? 'Employed' : 'Unemployed'}</p>
        </div>
    )
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)