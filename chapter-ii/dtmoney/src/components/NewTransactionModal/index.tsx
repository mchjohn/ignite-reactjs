import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onModalClosing: () => void;
}

export function NewTransactionModal({ isOpen, onModalClosing }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    onModalClosing();

    setAmount(0);
    setTitle('');
    setCategory('');
    setType('deposit');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onModalClosing}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onModalClosing}
        className='react-modal-close'  
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>  

        <input
          type="text"
          value={title}
          placeholder='Título'
          onChange={event => setTitle(event.target.value)} />
        <input
          type="number"
          value={amount}
          placeholder='Valor'
          onChange={event => setAmount(+event.target.value)} />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          value={category}
          placeholder='Categoria'
          onChange={event => setCategory(event.target.value)} />

        <button type='submit'>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}