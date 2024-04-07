// import styles from "./page.module.css";
// import LandingPage from "./LandingPage/page";
// import Calender from "./components/Course/course"
// import {addDays, subDays } from "date-fns";
// export default function Page() {
//   return (
//     <div>
//       <LandingPage />
//       <Calender 
//       events={[
//         {courseID: "CSCI 1100",
//          courseName: "Computer Science",
//          professor: "Turner",
//          date: addDays(new Date(), 6),
//          times: ["10:00"],
//          room: ["ALAC"],
//          ta: ["Turner"]}
//       ]} />
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/no-use-before-define */

"use client"
import './page.module.css'
import { TimeGrid } from './components/Course/TimeGrid'
import { addDays, setHours } from 'date-fns'
import { setMinutes } from 'date-fns'
import { useState } from 'react'
import { Event, CalendarEvent } from './components/Course/course'
import * as uuid from 'uuid'
import { getWeekDay } from './components/Course/getWeekDay'

const weekOffset = 0

export default function App() {
  const [events, setEvents] = useState<CalendarEvent[]>(() => [
    {
      id: "Tue",
      start: setMinutes(setHours(new Date(), 12), 0),
      end: setMinutes(setHours(new Date(), 14), 0),
      title: 'AMOS EATON 126',
    },
    {
      id: "Wed",
      start: setMinutes(setHours(new Date(), 10),0),
      end: setMinutes(setHours(new Date(), 12), 0),
      title: 'AMOS EATON 122',
    },
  ])
  const [selectedId, setSelected] = useState<string | null>(null)

  const today = addDays(new Date(), weekOffset * 7)
  const firstDayOfWeek = addDays(today, -1 * getWeekDay(today))

  return (
    <TimeGrid
      getQuarterStyle={(quarterTime) => {
        const { weekday, hour } = quarterTime

        const isWorkHour = (8 <= hour && hour < 12) || (14 <= hour && hour < 19)
        const isWorked = weekday <= 4 && isWorkHour
        return {
          background: isWorked ? 'white' : 'white',
        }
      }}
      onClick={(event) => {
        let element: HTMLElement | null = event.target as HTMLElement
        while (element) {
          if (element.matches('[data-draggable]')) {
            return
          }
          element = element.parentElement
        }

        setSelected(null)
      }}
    >
      {events.map((event) => {
        return (
          <Event
            key={event.id}
            event={event}
            onChange={(newEvent) => {
              setEvents((events) => {
                return events.map((event) => {
                  if (event.id !== newEvent.id) return event
                  return newEvent
                })
              })
            }}
            onClone={(newEvent) => {
              const newId = uuid.v4()
              setEvents((events) => {
                return [...events, { ...newEvent, id: newId }]
              })
              setSelected(newId)
            }}
            onSelect={() => {
              setSelected(event.id)
            }}
            isSelected={event.id === selectedId}
          />
        )
      })}
    </TimeGrid>
  )
}
