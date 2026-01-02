import { useMutation } from '@apollo/client';
import { SAVE_COMPTE } from '../graphql/mutations';
import { useState } from 'react';

export default function BankAccountCreator() {
  const [solde, setSolde] = useState('');
  const [type, setType] = useState('COURANT');
  
  const [saveCompte] = useMutation(SAVE_COMPTE);

  const handleSubmit = (e) => {
    e.preventDefault();

    saveCompte({
      variables: {
        compte: { solde: parseFloat(solde), type }
      }
    });

    setSolde('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl mb-4">Créer un Compte</h2>

      <input 
        type="number"
        placeholder="Solde"
        className="border p-2 mb-2"
        value={solde}
        onChange={(e) => setSolde(e.target.value)}
      />

      <select 
        className="border p-2 mb-2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="COURANT">COURANT</option>
        <option value="EPARGNE">EPARGNE</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2">
        Ajouter
      </button>
    </form>
  );
}
