import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { locale: 'en-US', date: new Date() };
    }

    componentDidMount() {
        this.timeOut = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeOut)
    }

    handleEngClick = () => {
        this.setState({ locale: 'en-US' });
    }
    handleBngClick = () => {
        this.setState({ locale: 'bn-BD' });
    }
    render() {
        const { date, locale } = this.state;
        const { component } = this.props;
        return (
            <div>
                <h1>This is a {component}</h1>
                <h1> {date.toLocaleTimeString(locale)}
                </h1>
                <button onClick={this.handleBngClick} >Bng Clock</button>
                <button onClick={this.handleEngClick} >Eng Clock</button>
            </div >
        )
    }
}

export default Clock; 