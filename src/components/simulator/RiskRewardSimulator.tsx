'use client';

import React, { useState } from 'react';

type SimulatorProps = {
  initialBalance?: number;
  targetBalance?: number;
};

const RiskRewardSimulator: React.FC<SimulatorProps> = ({
  initialBalance = 1000,
  targetBalance = 10000,
}) => {
  const [currentBalance, setCurrentBalance] = useState(initialBalance);
  const [riskScore, setRiskScore] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [eventType, setEventType] = useState('coinflip');
  const [betAmount, setBetAmount] = useState(10);
  const [gameHistory, setGameHistory] = useState<Array<{ type: string; amount: number; result: string; balanceChange: number }>>([]);
  
  // This is a placeholder for the actual simulator functionality
  // Will be connected to the real Risk-Reward Simulator from the GitHub repo
  
  const handleBet = () => {
    // This is a simplified mock version of how the bet logic would work
    // The actual implementation would be more complex and integrated with the Risk-Reward Simulator
    
    if (betAmount <= 0 || betAmount > currentBalance) {
      alert("Invalid bet amount");
      return;
    }
    
    setIsSimulating(true);
    
    setTimeout(() => {
      // Simulate a 50/50 chance of winning for demonstration
      const isWin = Math.random() > 0.5;
      const balanceChange = isWin ? betAmount : -betAmount;
      const newBalance = currentBalance + balanceChange;
      
      // Calculate a mock risk score based on bet amount relative to balance
      const betPercentage = (betAmount / currentBalance) * 100;
      const newRiskScore = Math.min(Math.max(riskScore + (betPercentage > 10 ? 5 : -2), 0), 100);
      
      // Update state
      setCurrentBalance(newBalance);
      setRiskScore(newRiskScore);
      setGameHistory([
        ...gameHistory,
        {
          type: eventType,
          amount: betAmount,
          result: isWin ? 'win' : 'loss',
          balanceChange: balanceChange
        }
      ]);
      
      setIsSimulating(false);
      
      // Check if game over conditions are met
      if (newBalance <= 0) {
        alert("Game Over! You've lost all your money.");
      } else if (newBalance >= targetBalance) {
        alert("Congratulations! You've reached your target balance!");
      }
    }, 1000); // Simulated delay
  };
  
  const resetGame = () => {
    setCurrentBalance(initialBalance);
    setRiskScore(0);
    setGameHistory([]);
    setBetAmount(10);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Risk-Reward Simulator</h2>
        <p className="text-gray-600 mt-2">
          Start with ${initialBalance}, try to reach ${targetBalance} without going bankrupt.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Your Balance</h3>
            <div className="text-3xl font-bold text-indigo-600">
              ${currentBalance.toFixed(2)}
            </div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded">
              <div
                className="h-2 bg-indigo-600 rounded"
                style={{ 
                  width: `${Math.min((currentBalance / targetBalance) * 100, 100)}%` 
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>${initialBalance}</span>
              <span>${targetBalance}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Risk Meter</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Your current risk level:</span>
              <span className="font-semibold text-sm">{riskScore}%</span>
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
          
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Place Your Bet</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                disabled={isSimulating}
              >
                <option value="coinflip">Coin Flip (50/50)</option>
                <option value="dice">Dice Roll (1/6)</option>
                <option value="roulette">Roulette (1/36)</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bet Amount
              </label>
              <input
                type="number"
                min={1}
                max={currentBalance}
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                disabled={isSimulating}
              />
            </div>
            
            <button
              onClick={handleBet}
              disabled={isSimulating || currentBalance <= 0}
              className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
                isSimulating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isSimulating ? 'Simulating...' : 'Place Bet'}
            </button>
            
            <button
              onClick={resetGame}
              className="w-full mt-2 py-2 px-4 rounded-md border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50"
            >
              Reset Game
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Game History</h3>
          {gameHistory.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No bets placed yet. Start playing!
            </div>
          ) : (
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
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
                  {[...gameHistory].reverse().slice(0, 10).map((game, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {game.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${game.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            game.result === 'win'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {game.result === 'win' ? `+$${game.balanceChange}` : `-$${-game.balanceChange}`}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Risk Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">
              Based on your betting behavior, here's a quick analysis of your gambling tendencies:
            </p>
            {gameHistory.length >= 5 ? (
              <div className="bg-indigo-50 p-4 rounded-md">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {riskScore < 30 ? (
                      <span>You're playing it very safe. Consider taking calculated risks for better returns.</span>
                    ) : riskScore < 70 ? (
                      <span>You have a balanced approach to risk. Keep monitoring your bet sizing relative to your bankroll.</span>
                    ) : (
                      <span>Your betting style is highly aggressive. Consider reducing your bet sizes to extend your playing time.</span>
                    )}
                  </li>
                  {betAmount > currentBalance * 0.2 && (
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Warning: Your current bet size is over 20% of your bankroll, which is considered high risk.</span>
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500 border border-dashed rounded-md">
                Place at least 5 bets to see your risk analysis
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          <strong>Note:</strong> This is a demonstration version of the Risk-Reward Simulator. The full version will 
          include more sophisticated betting options, detailed analytics, and personalized risk assessments.
        </p>
      </div>
    </div>
  );
};

export default RiskRewardSimulator; 