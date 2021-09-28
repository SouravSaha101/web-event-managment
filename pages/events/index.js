import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events && events.length ? (
        events.map((ev) => <EventItem key={ev.id} evt={ev} />)
      ) : (
        <h3>No Events Found :(</h3>
      )}
     
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    // revalidate: 1
  };
}
