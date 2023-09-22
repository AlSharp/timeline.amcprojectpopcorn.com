"use client"

import { useRouter } from 'next/navigation';
import { Chrono } from "react-chrono-extra";

export default function TimeLine({ events }) {

  const router = useRouter();

  const items = events.map(event =>({
    ...event,
    url: () => router.push(event.url),
    urlClassName: 'text-blue-500 hover:text-blue-400 hover:cursor-pointer'
  }))
 
  return <Chrono
    items={items}
    mode="VERTICAL_ALTERNATING"
    mediaHeight={320}
    cardWidth={640}
    cardHeight={160}
    hideControls
  />
}