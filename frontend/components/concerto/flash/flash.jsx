import React from "react"

const Flash = ({ errors, flash, testMsg }) => {
    return testMsg ? (
        <div className="flash-container">
            <div className="flash-msg">{testMsg}</div>
        </div>
    ) : (
        <></>
    )
}

export default Flash
