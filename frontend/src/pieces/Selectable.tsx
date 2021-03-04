import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { EventsContext } from '../contexts/events'
import { event } from '../types/event'
import history from '../helpers/history'
import { Breadcrumb, Button, Container, Modal, Row } from 'react-bootstrap'

const propTypes = {}
const localizer = momentLocalizer(moment)

class Selectable extends React.Component< {}, {events: Array<event>, show: boolean, selectedEvent: event}> {
  constructor() {
    super({})

    this.state = { events : [], show: false, selectedEvent: {start: new Date(0), end: new Date(0), title: ''}}
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.setState({...this.state, show: false})
  }

  render() {
    return (
      <EventsContext.Consumer>{ (eventsContext) =>
        {
          const {events, postEvent, refresh, deletePost} = eventsContext

          const completeDelete = (id: number) => {
            deletePost(id)
            this.closeModal()
          }
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
          }

          return(
            <> 
            <Modal show={this.state.show} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Information about Event</Modal.Title>
              </Modal.Header>
              <Modal.Body>{`Event title: ${this.state.selectedEvent.title}`}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => completeDelete(this.state.selectedEvent.id || -1)}>
                  Delete Event
                </Button>
              </Modal.Footer>
            </Modal>
            <Container fluid>
            <Row>
              <Breadcrumb>
              <Breadcrumb.Item href='https://www.savesanmarcosfoothills.org/'>Back to SSMF Info</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
              <Calendar
                selectable
                localizer={localizer}
                events={events || this.state.events}
                defaultView={'week'}
                scrollToTime={new Date()}
                defaultDate={new Date()}
                onSelectEvent={(data: event) => this.setState({...this.state, show: true, selectedEvent: data})}
                style={{height: '737px', width: '100%'}}
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
            </Row>
            </Container>
            </>
          )
        }
      }
      </EventsContext.Consumer>
    )
  }
}

export default Selectable
