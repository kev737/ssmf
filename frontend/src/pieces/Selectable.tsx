import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { EventsContext } from '../contexts/events'
import { event } from '../types/event'
import history from '../helpers/history'

const propTypes = {}
const localizer = momentLocalizer(moment)

class Selectable extends React.Component< {}, {events: Array<event>}> {
  constructor() {
    super({})

    this.state = { events : [] }
  }

  render() {
    return (
      <EventsContext.Consumer>{ (eventsContext) =>
        {
          const {events, postEvent, refresh} = eventsContext
          const select = ({ start, end } : {start : Date, end: Date}) => {
            const title = window.prompt('New Event name')
            if (title){
              postEvent({start: start, end: end, title: title}).then(() => {
                refresh()
              }).catch( (error) => {
                console.log(error)
                window.alert('Something went wrong. Please try again.')
              })
            }
            else{
              window.alert('Please try again with a title')
            }
          }

          return(
            <Calendar
              selectable
              localizer={localizer}
              events={events || this.state.events}
              defaultView={'week'}
              scrollToTime={new Date()}
              defaultDate={new Date()}
              onSelectEvent={(data: event) => alert(data.title)}
              style={{height: '737px'}}
              onSelectSlot={(data) => {
                if(typeof(data.start) === 'string' || typeof(data.end) === 'string'){
                  window.alert('Something went wrong in Calendar')
                  return
                }
                else{
                  select({start: data.start, end: data.end})
                }
                
              }}
            />
          )
        }
      }
      </EventsContext.Consumer>
    )
  }
}

export default Selectable
