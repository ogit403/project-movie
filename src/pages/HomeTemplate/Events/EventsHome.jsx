import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventMovie from '../../../components/Home/EventMovie'

export default function EventsHome() {
    const listEvent = useSelector(state => state.EventsReducer.events)
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <EventMovie listEvent={listEvent}/>  
        </>
    )
}
