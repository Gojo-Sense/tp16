import { useQuery } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../graphql/queries";

export default function FinancialHistoryList() {
  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement...</p>;

  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="font-bold text-xl mb-4">Historique des Transactions</h2>

      {data.allTransactions.map((t) => (
        <div key={t.id} className="p-3 border rounded mb-2">
          <p>💰 Montant : {t.montant}</p>
          <p>📅 Date : {t.date}</p>
          <p>🏦 Type : {t.type}</p>
          <p>🔗 Compte : {t.compte.id}</p>
        </div>
      ))}
    </div>
  );
}
