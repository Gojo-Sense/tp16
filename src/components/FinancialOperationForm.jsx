import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../graphql/mutations";

export default function FinancialOperationForm() {
  const [compteId, setCompteId] = useState("");
  const [montant, setMontant] = useState("");
  const [type, setType] = useState("DEPOT");

  const [addTransaction] = useMutation(ADD_TRANSACTION);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      variables: {
        transactionRequest: {
          compteId: parseInt(compteId),
          montant: parseFloat(montant),
          type,
        },
      },
    });

    setMontant("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h2 className="font-bold text-xl mb-3">Effectuer une Transaction</h2>

      <input
        className="border p-2 mb-2 w-full"
        placeholder="ID Compte"
        value={compteId}
        onChange={(e) => setCompteId(e.target.value)}
      />

      <input
        className="border p-2 mb-2 w-full"
        placeholder="Montant"
        type="number"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
      />

      <select
        className="border p-2 mb-2 w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="DEPOT">DÉPÔT</option>
        <option value="RETRAIT">RETRAIT</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Valider
      </button>
    </form>
  );
}
