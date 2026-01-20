import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { Votes, VoteType } from '../types/votes.ts'
import VoteOptions from '../VoteOptions/VoteOptions.tsx'

export default function App() {
  const [Vote, SetVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  function handleVote(type: VoteType) {
    SetVote(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }
  
  function resetVotes() {
    SetVote({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalVotes = Vote.good + Vote.neutral + Vote.bad;

  const positiveRate = totalVotes ? Math.round((Vote.good / totalVotes) * 100) : 0;


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={positiveRate < 0} />
    </div>
  );
}

