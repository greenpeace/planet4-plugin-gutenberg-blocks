import { useState } from '@wordpress/element';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import firebase from './firebase';

export const ControlShiftPetition = () => {

  const [petitionSlug, setPetitionSlug] = useState('');
  const [pCollection, loading, error] = useCollectionOnce(
    firebase.firestore().collection('p4-test-petition'), {}
  );

  const options = pCollection ? pCollection.docs.map((p) => {
    return <option key={p.data().slug} value={p.data().slug}>{p.data().title}</option>
  }) : [<option key="0" value="">Loading...</option>];

  const petition = petitionSlug && pCollection
    ? pCollection.docs.find((p) => p.data().slug === petitionSlug) 
    : null;

  const listProps = petition ? Object.keys(petition.data()).map((key) =>
    <li key={key}
      dangerouslySetInnerHTML={{ __html:`${key}: ${JSON.stringify(petition.data()[key])}` }}
    />
  ) : [];

  return (
    <div>
      {error && <p><strong>Error: {JSON.stringify(error)}</strong></p>}
      {loading && <p><span>Document: Loading...</span></p>}
      {options &&
        <p>
          <label>Petitions</label>
            <select
              value={petitionSlug}
              onChange={(e) => {setPetitionSlug(e.target.value)}}
            >
              {options}
            </select>
        </p>
      }
      {petition && 
        <>
          <h2>{petition.data().title}</h2>
          <p>{petition.data().why}</p>
          <p>{petition.data().signature_count} / {petition.data().goal}</p>
          <ul>
          { listProps }
          </ul>
          <p>
            {<span>Document: {JSON.stringify(petition.data())}</span>}
          </p>
        </>
      }
    </div>
  );
};
