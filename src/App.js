import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

import BankAccountList from "./components/BankAccountList";
import BankAccountCreator from "./components/BankAccountCreator";
import FinancialOperationForm from "./components/FinancialOperationForm";
import FinancialHistoryList from "./components/FinancialHistoryList";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Gestion des Comptes Bancaires
        </h1>

        {/* SECTION COMPTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <BankAccountCreator />
          </div>
          <div>
            <BankAccountList />
          </div>
        </div>

        {/* SECTION TRANSACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <FinancialOperationForm />
          </div>
          <div>
            <FinancialHistoryList />
          </div>
        </div>

      </div>
    </ApolloProvider>
  );
}

export default App;
