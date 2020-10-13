import { useState } from '@wordpress/element';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from './firebase';

export const ControlShiftEvents = () => {
  const [eventsCollection, loading, error] = useCollection(
    firebase.firestore().collection('p4-test-event'), {}
  );

  const events = eventsCollection ? eventsCollection.docs.map((e) => {
    return <li key={e.id}>[{e.data().type}] {e.data().jid}</li>
  }) : [];

  return (
    <div>
      <h2>Events</h2>
      {error && <p><strong>Error: {JSON.stringify(error)}</strong></p>}
      {loading && <p><span>Loading...</span></p>}
      <ul>
        {events}
      </ul>
    </div>
  )
}
