// CSS
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pieces
import Selectable from './pieces/Selectable';

// Contexts
import EventsProvider from './contexts/events';

let global = 0;

const Protect = () => {
  global += 1;
  let pass
  if(global === 2)
    pass = window.prompt('Enter Password: ');
  return pass === 'ssmf'?  <Selectable/> : <Protect/>
}

function App() {
  return (
    <EventsProvider>
      <Protect/>
    </EventsProvider>
  );
}

export default App;
