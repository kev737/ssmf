import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from '../events'
import moment from 'moment'

const propTypes = {}
const localizer = momentLocalizer(moment)

class Selectable extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {
    return (
      <Calendar
        selectable
        localizer={localizer}
        events={this.state.events}
        defaultView={Views.WEEK}
        scrollToTime={new Date()}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        style={{height: '737px'}}
        onSelectSlot={this.handleSelect}
      />
    )
  }
}

Selectable.propTypes = propTypes

export default Selectable
