import React, { useState } from 'react';

const Clock2 = (props) => {
    const [locale, setLocale] = useState('en-US');
    const [clock, setClock] = useState(new Date());
    setInterval(() => {
        setClock(new Date())
    }, 1000)
    const handleBngClick = () => setLocale('bn-BD');
    const handleEngClick = () => setLocale('en-US');
    return (
        <div>
            <h1>This is a {props.component}</h1>
            <h1>
                {clock.toLocaleTimeString(locale)}
            </h1>
            <button onClick={handleBngClick}>Bng Clock</button>
            <button onClick={handleEngClick}>Eng Clock</button>
        </div>
    );
};

export default Clock2; 