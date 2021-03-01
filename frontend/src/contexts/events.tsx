import React, { Component, createContext } from 'react'
import API from '../helpers/api'
import { event } from '../types/event'

export const EventsContext = createContext({events: [], postEvent: async (event:event) => {}, refresh: async () => {}})

interface eventsPayload {
  id: number, 
  description: string | null,
  start: Date,
  end: Date,
  title: string,
  created_at: Date,
  updated_at: Date,
}

export class EventsProvider extends Component {
  state={ events: [], isLoading: true}
  constructor(){
    super({})

    this.refresh = this.refresh.bind(this)
  }
  async componentDidMount(){
    await this.refresh()
  }

  async postEvent(event: event){
    return await API.post('/events/', event).then(
      (reply) => {
      }).catch( (reply) => {
        window.alert('Something went wrong. Please try again.')
      })
  }

  async refresh(){
    await API.get('/events/').then( 
      (reply) => {
        this.setState({
          events: reply.data.map( (data : eventsPayload) => { return {start: new Date(data.start), end: new Date(data.end), title: data.title}}),
          isLoading: false
        })
      }
    ).catch( (data) => {
      console.log('Something went wrong.')
    })
  }

  render() {
    return this.state.isLoading? <div>Loading...</div> : (
      <EventsContext.Provider value={{...this.state, postEvent: this.postEvent, refresh: this.refresh}}>
        {this.props.children}
      </EventsContext.Provider>
    )
  }
}

export default EventsProvider
