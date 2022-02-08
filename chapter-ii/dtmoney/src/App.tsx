import { useState } from 'react';

import { GlobalStyle } from "./styles/global";

import { makeServer } from "./server";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionProvider } from './hooks/useTransactions';

makeServer();

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  function handleModalOpening() {
    setNewTransactionModalIsOpen(true);
  }

  function handleModalClosing() {
    setNewTransactionModalIsOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleModalOpening} />
      <Dashboard />
      <NewTransactionModal
        onModalClosing={handleModalClosing}
        isOpen={newTransactionModalIsOpen} />

      <GlobalStyle />
    </TransactionProvider>
  );
}
