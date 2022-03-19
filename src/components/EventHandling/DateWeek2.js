import React, { useState } from "react";

const DateWeek2 = (props) => {
    const [locale, setLocale] = useState('en-US');
    const handleBngDate = () => setLocale('bn-BD');
    const handleEngDate = () => setLocale('en-US');
    return (
        <div>
            <h1>This is a {props.component}</h1>
            <h1>{new Date().toLocaleDateString(locale)}</h1>
            <button onClick={handleBngDate}>Bng Date</button>
            <button onClick={handleEngDate}>Eng Date</button>
        </div>
    )
}

export default DateWeek2;