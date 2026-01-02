import { useQuery } from '@apollo/client';
import { GET_ALL_COMPTES } from '../graphql/queries';

export default function BankAccountList() {
  const { loading, error, data } = useQuery(GET_ALL_COMPTES);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur !</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Liste des Comptes</h1>

      {data.allComptes.map(compte => (
        <div key={compte.id} className="p-4 border rounded mb-2">
          <p>💳 ID : {compte.id}</p>
          <p>💰 Solde : {compte.solde} MAD</p>
          <p>📅 Créé le : {compte.dateCreation}</p>
          <p>🏦 Type : {compte.type}</p>
        </div>
      ))}
    </div>
  );
}
