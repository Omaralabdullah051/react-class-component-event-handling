import React from "react";

class DateWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = { locale: 'en-US' };
    }
    handleBngDate = () => {
        this.setState({ locale: 'bn-BD' });
    }
    handleEngDate = () => {
        this.setState({ locale: 'en-US' });
    }
    render() {
        const { locale } = this.state;
        return (
            <div>
                <h1>This is a {this.props.component}</h1>
                <h1>{new Date().toLocaleDateString(locale)}</h1>
                <button onClick={this.handleBngDate}>Bng Date</button>
                <button onClick={this.handleEngDate}>Eng Date</button>
            </div>
        )
    }
}

export default DateWeek;