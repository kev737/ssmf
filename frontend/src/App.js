// CSS
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Pieces
import Selectable from './pieces/Selectable';

// Contexts
import EventsProvider from './contexts/events';

function App() {
  return (
    <EventsProvider>
      <Selectable/>
    </EventsProvider>
  );
}

export default App;
