
import './App.css';
import Clock from './components/EventHandling/Clock';
import Clock2 from './components/EventHandling/Clock2';
import DateWeek from './components/EventHandling/DateWeek';
import DateWeek2 from './components/EventHandling/DateWeek2';
function App() {
  return (
    <div className="App">
      <Clock component="Class Component"></Clock>
      <Clock2 component="Functional Component"></Clock2>
      <DateWeek component="Class Component"></DateWeek>
      <DateWeek2 component="funtional Component"></DateWeek2>
    </div>
  );
}

export default App;
