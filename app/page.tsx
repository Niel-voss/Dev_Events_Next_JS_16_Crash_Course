import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/exploreBtn"

const events = [
  { image: '/images/event1.png', title: 'event 1' },
  { image: '/images/event2.png', title: 'event 2' },
]
const Page = () => {
  return (
    <section>
      <h1 className="text center"> The Hub for everyday <br /> you really cant miss</h1>
      <p>Hackathons, meetups and conference, all in one place</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7" >
        <h3> Future Events</h3>

        <ul className="events">
          {events.map((event) => {
            return (
              <li key={event.title}>
                <EventCard{...event} />
              </li>
            )
          }

          )}

        </ul>
      </div>
    </section>
  )
}


export default Page