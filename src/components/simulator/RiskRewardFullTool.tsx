'use client';

import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';

type Simulation = {
  id: number;
  date: string;
  initialBalance: number;
  finalBalance: number;
  winRate: number;
  riskScore: number;
  betCount: number;
  largestWin: number;
  largestLoss: number;
};

type BettingData = {
  date: string;
  balance: number;
  riskScore: number;
};

const RiskRewardFullTool: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState(1000);
  const [riskScore, setRiskScore] = useState(30);
  const [betAmount, setBetAmount] = useState(50);
  const [betHistory, setBetHistory] = useState<Array<{ amount: number; result: string; balanceChange: number }>>([]);
  const [selectedPersona, setSelectedPersona] = useState('baby-betsy');
  const [selectedEvent, setSelectedEvent] = useState('coinflip');
  const [isLoading, setIsLoading] = useState(false);
  const [bettingData, setBettingData] = useState<BettingData[]>([]);
  const [simulationHistory, setSimulationHistory] = useState<Simulation[]>([]);

  // Mock data for demonstration purposes
  useEffect(() => {
    // Generate mock data for the balance chart
    const generateMockData = () => {
      const data: BettingData[] = [];
      let balance = 1000;
      let risk = 30;
      
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (30 - i));
        
        balance = balance + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 100;
        risk = Math.min(Math.max(risk + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 5, 0), 100);
        
        data.push({
          date: date.toISOString().split('T')[0],
          balance: Math.max(balance, 0),
          riskScore: risk
        });
      }
      
      return data;
    };
    
    // Generate mock simulation history
    const generateMockSimulations = () => {
      const simulations: Simulation[] = [];
      
      for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i * 3);
        
        simulations.push({
          id: i + 1,
          date: date.toISOString().split('T')[0],
          initialBalance: 1000,
          finalBalance: 1000 + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 500,
          winRate: Math.random() * 0.7 + 0.3,
          riskScore: Math.random() * 100,
          betCount: Math.floor(Math.random() * 50) + 10,
          largestWin: Math.floor(Math.random() * 200) + 50,
          largestLoss: Math.floor(Math.random() * 150) + 20
        });
      }
      
      return simulations;
    };
    
    setBettingData(generateMockData());
    setSimulationHistory(generateMockSimulations());
  }, []);

  const handleBet = () => {
    if (betAmount <= 0 || betAmount > currentBalance) {
      alert("Invalid bet amount");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call or complex calculation
    setTimeout(() => {
      // Calculate odds based on selected event
      let winChance = 0.5; // Default for coinflip
      let multiplier = 2.0; // Default for coinflip
      
      switch (selectedEvent) {
        case 'dice':
          winChance = 1/6;
          multiplier = 6.0;
          break;
        case 'bullseye':
          winChance = 1/3;
          multiplier = 3.0;
          break;
        case 'roulette':
          winChance = 1/36;
          multiplier = 35.0;
          break;
        case 'stocks':
          winChance = 0.1;
          multiplier = 10.0;
          break;
        case 'lottery':
          winChance = 0.001;
          multiplier = 1000.0;
          break;
      }
      
      // Determine win/loss
      const isWin = Math.random() < winChance;
      const balanceChange = isWin ? betAmount * (multiplier - 1) : -betAmount;
      const newBalance = currentBalance + balanceChange;
      
      // Update risk score based on bet behavior
      const betPercentage = (betAmount / currentBalance) * 100;
      const eventRiskFactor = (1 - winChance) * 100;
      const newRiskScore = Math.min(
        Math.max(
          riskScore + 
          (betPercentage > 10 ? 5 : -2) + 
          (eventRiskFactor > 50 ? 3 : -1),
          0
        ), 
        100
      );
      
      // Update state
      setCurrentBalance(newBalance);
      setRiskScore(newRiskScore);
      setBetHistory([
        ...betHistory,
        {
          amount: betAmount,
          result: isWin ? 'win' : 'loss',
          balanceChange: balanceChange
        }
      ]);
      
      setIsLoading(false);
      
      // Update persona based on risk score
      if (newRiskScore <= 30) {
        setSelectedPersona('baby-betsy');
      } else if (newRiskScore <= 70) {
        setSelectedPersona('midlife-mike');
      } else {
        setSelectedPersona('yolo-yolanda');
      }
    }, 1000);
  };

  const resetSimulation = () => {
    setCurrentBalance(1000);
    setRiskScore(30);
    setBetAmount(50);
    setBetHistory([]);
    setSelectedPersona('baby-betsy');
    setSelectedEvent('coinflip');
  };

  // Custom styling for Tab components
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Risk-Reward Professional Simulator</h2>
        <p className="text-gray-600 mt-1">Analyze betting patterns and risk management strategies</p>
      </div>
      
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-gray-100 border-b border-gray-200">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-3 text-sm font-medium leading-5 text-gray-700',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow-sm border-b-2 border-indigo-500'
                  : 'hover:bg-gray-50'
              )
            }
          >
            Simulator
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-3 text-sm font-medium leading-5 text-gray-700',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow-sm border-b-2 border-indigo-500'
                  : 'hover:bg-gray-50'
              )
            }
          >
            Analytics
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-3 text-sm font-medium leading-5 text-gray-700',
                'focus:outline-none',
                selected
                  ? 'bg-white shadow-sm border-b-2 border-indigo-500'
                  : 'hover:bg-gray-50'
              )
            }
          >
            History
          </Tab>
        </Tab.List>
        
        <Tab.Panels>
          {/* Simulator Panel */}
          <Tab.Panel className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Balance & Risk */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Current Balance</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">${currentBalance.toFixed(2)}</div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mt-6 mb-4">Risk Level</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Current risk:</span>
                    <span className="font-semibold">{riskScore}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div
                      className={`h-2 rounded transition-all duration-500 ${
                        riskScore < 30
                          ? 'bg-green-500'
                          : riskScore < 70
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${riskScore}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low Risk</span>
                    <span>Medium Risk</span>
                    <span>High Risk</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Your Persona</h3>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                      selectedPersona === 'baby-betsy' 
                        ? 'bg-green-500' 
                        : selectedPersona === 'midlife-mike' 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                    }`}>
                      {selectedPersona === 'baby-betsy' && 'BB'}
                      {selectedPersona === 'midlife-mike' && 'MM'}
                      {selectedPersona === 'yolo-yolanda' && 'YY'}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">
                        {selectedPersona === 'baby-betsy' && 'Baby Betsy'}
                        {selectedPersona === 'midlife-mike' && 'Midlife Crisis Mike'}
                        {selectedPersona === 'yolo-yolanda' && 'YOLO Yolanda'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {selectedPersona === 'baby-betsy' && 'Conservative, safe bets'}
                        {selectedPersona === 'midlife-mike' && 'Balanced risk approach'}
                        {selectedPersona === 'yolo-yolanda' && 'High risk, high reward'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mt-2">
                    {selectedPersona === 'baby-betsy' && (
                      <p>Prefers low-risk bets, max 10% of bankroll per bet. Carefully considers odds before betting.</p>
                    )}
                    {selectedPersona === 'midlife-mike' && (
                      <p>Takes moderate risks, betting up to 30% of bankroll. Balances between safe and risky options.</p>
                    )}
                    {selectedPersona === 'yolo-yolanda' && (
                      <p>Goes all-in frequently, seeking big wins. High tolerance for risk, often ignores probabilities.</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Bet Placement & History */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Place Your Bet</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select
                      value={selectedEvent}
                      onChange={(e) => setSelectedEvent(e.target.value)}
                      className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      disabled={isLoading}
                    >
                      <option value="coinflip">Coin Flip (2.0x, 50% chance)</option>
                      <option value="dice">Dice Roll (6.0x, 16.6% chance)</option>
                      <option value="bullseye">Bullseye (3.0x, 33% chance)</option>
                      <option value="roulette">Roulette (35.0x, 2.7% chance)</option>
                      <option value="stocks">Stock Market (10.0x, 10% chance)</option>
                      <option value="lottery">Lottery (1000.0x, 0.1% chance)</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bet Amount</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        min={1}
                        max={currentBalance}
                        value={betAmount}
                        onChange={(e) => setBetAmount(Number(e.target.value))}
                        className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 space-x-2">
                    <button
                      onClick={() => setBetAmount(Math.floor(currentBalance * 0.1))}
                      className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      10%
                    </button>
                    <button
                      onClick={() => setBetAmount(Math.floor(currentBalance * 0.25))}
                      className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      25%
                    </button>
                    <button
                      onClick={() => setBetAmount(Math.floor(currentBalance * 0.5))}
                      className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      50%
                    </button>
                    <button
                      onClick={() => setBetAmount(currentBalance)}
                      className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium hover:bg-gray-300"
                      disabled={isLoading}
                    >
                      All In
                    </button>
                  </div>
                  
                  <div className="mt-6 flex space-x-4">
                    <button
                      onClick={handleBet}
                      disabled={isLoading || betAmount <= 0 || betAmount > currentBalance}
                      className={`flex-1 px-5 py-2 rounded-md text-white font-medium ${
                        isLoading || betAmount <= 0 || betAmount > currentBalance
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {isLoading ? 'Processing...' : 'Place Bet'}
                    </button>
                    
                    <button
                      onClick={resetSimulation}
                      className="flex-1 px-5 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Bet History</h3>
                  
                  {betHistory.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No bets placed yet. Start playing!
                    </div>
                  ) : (
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Bet #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Result
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[...betHistory].reverse().slice(0, 10).map((bet, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {betHistory.length - index}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${bet.amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    bet.result === 'win'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {bet.result === 'win' ? `+$${bet.balanceChange.toFixed(2)}` : `-$${Math.abs(bet.balanceChange).toFixed(2)}`}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Tab.Panel>
          
          {/* Analytics Panel */}
          <Tab.Panel className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Primary Analytics */}
              <div className="lg:col-span-8">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Betting Balance History</h3>
                  <div className="h-64 bg-white p-4 rounded border border-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">
                      [Placeholder for Balance Chart]
                      <br />
                      In a real application, this would display a chart of your balance over time.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Risk Level History</h3>
                  <div className="h-64 bg-white p-4 rounded border border-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">
                      [Placeholder for Risk Chart]
                      <br />
                      In a real application, this would display a chart of your risk score over time.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Analytics Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Betting Behavior</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Win Rate</h4>
                      <p className="text-2xl font-bold text-gray-900">{(betHistory.filter(b => b.result === 'win').length / Math.max(betHistory.length, 1) * 100).toFixed(1)}%</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Average Bet Size</h4>
                      <p className="text-2xl font-bold text-gray-900">
                        ${betHistory.length > 0 
                          ? (betHistory.reduce((sum, bet) => sum + bet.amount, 0) / betHistory.length).toFixed(2)
                          : '0.00'
                        }
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Largest Win</h4>
                      <p className="text-2xl font-bold text-green-600">
                        ${betHistory.length > 0 
                          ? Math.max(...betHistory.filter(b => b.result === 'win').map(b => b.balanceChange), 0).toFixed(2)
                          : '0.00'
                        }
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Largest Loss</h4>
                      <p className="text-2xl font-bold text-red-600">
                        ${betHistory.length > 0 
                          ? Math.max(...betHistory.filter(b => b.result === 'loss').map(b => Math.abs(b.balanceChange)), 0).toFixed(2)
                          : '0.00'
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Pattern Recognition</h3>
                  
                  {betHistory.length < 5 ? (
                    <p className="text-gray-500 text-sm">
                      Place more bets to receive pattern analysis and personalized recommendations.
                    </p>
                  ) : (
                    <div className="space-y-4 text-sm">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="font-medium text-yellow-800">Chasing Losses</p>
                        <p className="mt-1 text-yellow-600">
                          You tend to increase bet size after losses. Consider setting consistent bet sizing strategies.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="font-medium text-green-800">Consistent Strategy</p>
                        <p className="mt-1 text-green-600">
                          You maintain good balance in your betting amounts. Continue this disciplined approach.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="font-medium text-blue-800">Risk Management</p>
                        <p className="mt-1 text-blue-600">
                          Your risk score has remained relatively stable, showing good self-control.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Tab.Panel>
          
          {/* History Panel */}
          <Tab.Panel className="p-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Simulation History</h3>
              
              {simulationHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No simulation history available. Complete a session to save data.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Starting Balance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Final Balance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Win Rate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Risk Score
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Bets
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {simulationHistory.map((simulation) => (
                        <tr key={simulation.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {simulation.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${simulation.initialBalance.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                simulation.finalBalance >= simulation.initialBalance
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              ${simulation.finalBalance.toFixed(2)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {(simulation.winRate * 100).toFixed(1)}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {simulation.riskScore.toFixed(1)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {simulation.betCount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default RiskRewardFullTool; 