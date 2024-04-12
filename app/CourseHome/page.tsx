"use client"
import { TimeGrid } from '../components/Course/TimeGrid'
import { addDays, setHours } from 'date-fns'
import { setMinutes } from 'date-fns'
import { useState } from 'react'
import { Event, CalendarEvent } from '../components/Course/course'
import * as uuid from 'uuid'
import { getWeekDay } from '../components/Course/getWeekDay'

const weekOffset = 0

export default function App() {
  const [events, setEvents] = useState<CalendarEvent[]>(() => [
    {
      id: "Mon",
      start: setMinutes(setHours(new Date(), 12), 0),
      end: setMinutes(setHours(new Date(), 14), 0),
      title: 'Yuxiao; AE 118',
    },
    {
      id: "Mon",
      start: setMinutes(setHours(new Date(), 14),0),
      end: setMinutes(setHours(new Date(), 16), 0),
      title: 'Yuxio; AE 118',
    },
    {
      id: "Mon",
      start: setMinutes(setHours(new Date(), 16), 0),
      end: setMinutes(setHours(new Date(), 18), 0),
      title: 'Himangi & Siggy; AE 118',
    },
    {
      id: "Tue",
      start: setMinutes(setHours(new Date(), 10), 0),
      end: setMinutes(setHours(new Date(), 12), 0),
      title: 'Zekkerriyya; AE 118',
    },
    {
      id: "Tue",
      start: setMinutes(setHours(new Date(), 14), 0),
      end: setMinutes(setHours(new Date(), 16), 0),
      title: 'Pierson & Zetong; Sage 4101',
    },
    {
      id: "Tue",
      start: setMinutes(setHours(new Date(), 16), 0),
      end: setMinutes(setHours(new Date(), 18), 0),
      title: 'Sam; Sage 4101',
    },
    {
      id: "Tue",
      start: setMinutes(setHours(new Date(), 18), 0),
      end: setMinutes(setHours(new Date(), 20), 0),
      title: 'Tushar & Chris; Sage 4101',
    },
    {
      id: "Wed",
      start: setMinutes(setHours(new Date(), 12), 0),
      end: setMinutes(setHours(new Date(), 14), 0),
      title: 'Hongliang; Walker 5113',
    },
    {
      id: "Wed",
      start: setMinutes(setHours(new Date(), 14), 0),
      end: setMinutes(setHours(new Date(), 16), 0),
      title: 'Hongliang & Vasundhara; Walker 5113',
    },
    {
      id: "Wed",
      start: setMinutes(setHours(new Date(), 16), 0),
      end: setMinutes(setHours(new Date(), 18), 0),
      title: 'Vasundhara; AE 118',
    },
    {
      id: "Thu",
      start: setMinutes(setHours(new Date(), 14), 0),
      end: setMinutes(setHours(new Date(), 16), 0),
      title: 'Kewen & Aidan; Lally 104',
    },
    {
      id: "Thu",
      start: setMinutes(setHours(new Date(), 16), 0),
      end: setMinutes(setHours(new Date(), 18), 0),
      title: 'Yufei & Himangi; Lally 104',
    },
    {
      id: "Thu",
      start: setMinutes(setHours(new Date(), 18), 0),
      end: setMinutes(setHours(new Date(), 20), 0),
      title: 'Yufei; Lally 104',
    },
    {
      id: "Fri",
      start: setMinutes(setHours(new Date(), 10), 0),
      end: setMinutes(setHours(new Date(), 12), 0),
      title: 'Zekkerriyya; AE 118',
    },
    {
      id: "Fri",
      start: setMinutes(setHours(new Date(), 16), 0),
      end: setMinutes(setHours(new Date(), 18), 0),
      title: 'Gursimran; AE 118',
    },
    {
      id: "Fri",
      start: setMinutes(setHours(new Date(), 18), 0),
      end: setMinutes(setHours(new Date(), 20), 0),
      title: 'Gursimran & Siggy; AE 118',
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
