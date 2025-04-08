'use client';

/**
 * RealTimeAnalyticsDashboard.tsx
 * 
 * This component provides an enhanced analytics dashboard with real-time metrics
 * and visualizations for user gambling behavior. It is designed for authenticated users
 * and offers more sophisticated analysis than the basic AnalyticsDashboard component.
 * 
 * The dashboard is organized into tabs (overview, behavioral analysis, financial metrics)
 * and uses several sub-components to display different types of information:
 * - RiskLevel: Visual indicator for different risk levels
 * - Metric: Display of various metrics with trend indicators
 * - PatternCard: Display of detected patterns with severity and recommendations
 * 
 * @author Development Team
 * @version 2.0.0
 * @since April 2024
 */

import React, { useState } from 'react';
import { useRealTimeAnalytics, GameEvent, AnalyticsSnapshot } from '../../utils/analyticsUtils';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ChartBarIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

/**
 * RiskLevel Component
 * 
 * Displays a visual indicator for risk levels with appropriate styling based on severity.
 * Used to provide quick visual feedback about the risk level of various metrics.
 * 
 * @param {Object} props - Component props
 * @param {string} props.level - The risk level to display ('Low', 'Medium', 'High', 'Very High')
 * @param {('sm'|'md'|'lg')} [props.size='md'] - The size of the risk level indicator
 * @returns {JSX.Element} - The rendered component
 */
const RiskLevel: React.FC<{ level: string; size?: 'sm' | 'md' | 'lg' }> = ({ level, size = 'md' }) => {
  const getBgColor = () => {
    switch (level) {
      case 'Low': return 'bg-green-50 text-green-700';
      case 'Medium': return 'bg-yellow-50 text-yellow-700';
      case 'High': return 'bg-orange-50 text-orange-700';
      case 'Very High': return 'bg-red-50 text-red-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };
  
  const getSize = () => {
    switch (size) {
      case 'sm': return 'px-2 py-1 text-xs';
      case 'lg': return 'px-3 py-1.5 text-sm';
      default: return 'px-2.5 py-1 text-xs';
    }
  };
  
  return (
    <span className={`inline-flex items-center rounded-full ${getBgColor()} ${getSize()} font-medium`}>
      {level}
    </span>
  );
};

/**
 * Metric Component
 * 
 * Displays various metrics with optional trend indicators and tooltips.
 * Used throughout the dashboard to show financial and behavioral metrics.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the metric
 * @param {string|number} props.value - The value of the metric
 * @param {string} [props.subValue] - An optional sub-value (e.g., a unit or denominator)
 * @param {('up'|'down'|'neutral')} [props.trend] - An optional trend direction
 * @param {string} [props.trendLabel] - A label for the trend
 * @param {boolean} [props.isGood=true] - Whether the trend is positive or negative
 * @param {string} [props.tooltipText] - Optional tooltip text for additional context
 * @returns {JSX.Element} - The rendered component
 */
type MetricProps = {
  title: string;
  value: string | number;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendLabel?: string;
  isGood?: boolean;
  tooltipText?: string;
};

const Metric: React.FC<MetricProps> = ({ 
  title, 
  value, 
  subValue, 
  trend, 
  trendLabel, 
  isGood = true,
  tooltipText 
}) => {
  const getTrendColor = () => {
    if (!trend) return '';
    if (trend === 'up') return isGood ? 'text-green-500' : 'text-red-500';
    if (trend === 'down') return isGood ? 'text-red-500' : 'text-green-500';
    return 'text-gray-500';
  };
  
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend === 'up') {
      return <ArrowTrendingUpIcon className={`h-4 w-4 ${getTrendColor()}`} aria-hidden="true" />;
    }
    if (trend === 'down') {
      return <ArrowTrendingDownIcon className={`h-4 w-4 ${getTrendColor()}`} aria-hidden="true" />;
    }
    return null;
  };
  
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500 flex items-center">
        {title}
        {tooltipText && (
          <span className="group relative ml-2">
            <span className="cursor-help rounded-full bg-gray-100 p-1">
              <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="pointer-events-none absolute left-0 -top-10 w-48 rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
              {tooltipText}
            </span>
          </span>
        )}
      </dt>
      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
        <div className="flex items-baseline text-2xl font-semibold text-gray-900">
          {value}
          {subValue && <span className="ml-2 text-sm font-medium text-gray-500">{subValue}</span>}
        </div>

        {trend && (
          <div className="bg-gray-50 px-2 py-1 rounded-md inline-flex items-center text-xs font-medium">
            {getTrendIcon()}
            <span className={`${getTrendColor()} ml-1`}>{trendLabel}</span>
          </div>
        )}
      </dd>
    </div>
  );
};

/**
 * PatternCard Component
 * 
 * Displays detected gambling behavior patterns with severity indicators and recommendations.
 * Used to highlight potential issues and provide actionable advice.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the pattern
 * @param {string} props.description - A description of the pattern
 * @param {('low'|'medium'|'high')} props.severity - The severity level of the pattern
 * @param {string} props.recommendation - A recommendation for addressing the pattern
 * @returns {JSX.Element} - The rendered component
 */
type PatternCardProps = {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
};

const PatternCard: React.FC<PatternCardProps> = ({ title, description, severity, recommendation }) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'low': return 'bg-blue-50 border-blue-400 text-blue-700';
      case 'medium': return 'bg-yellow-50 border-yellow-400 text-yellow-700';
      case 'high': return 'bg-red-50 border-red-400 text-red-700';
      default: return 'bg-gray-50 border-gray-400 text-gray-700';
    }
  };
  
  const getSeverityIcon = () => {
    switch (severity) {
      case 'high':
        return (
          <ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        );
      case 'medium':
        return (
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        );
      default:
        return (
          <ChartBarIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        );
    }
  };
  
  return (
    <div className={`${getSeverityColor()} border-l-4 p-4 mb-4 rounded-md`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {getSeverityIcon()}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-2 text-sm">
            <p>{description}</p>
          </div>
          <div className="mt-2 text-sm font-medium">
            <p>Recommendation: {recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * RealTimeAnalyticsDashboard Component
 * 
 * The main dashboard component that processes game history data and displays
 * comprehensive analytics about user gambling behavior. It integrates with the
 * useRealTimeAnalytics hook to process data and render insights.
 * 
 * This component is exclusively used for logged-in users in the Risk Simulator
 * and replaces the basic AnalyticsDashboard for authenticated users.
 * 
 * @param {Object} props - Component props
 * @param {Array<GameEvent>} props.gameHistory - The history of gambling events
 * @param {number} props.currentBalance - The user's current balance
 * @param {number} props.initialBalance - The user's initial balance
 * @returns {JSX.Element} - The rendered component
 */
type RealTimeAnalyticsDashboardProps = {
  gameHistory: Array<GameEvent>;
  currentBalance: number;
  initialBalance: number;
};

const RealTimeAnalyticsDashboard: React.FC<RealTimeAnalyticsDashboardProps> = ({
  gameHistory,
  currentBalance,
  initialBalance
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Use our custom hook to get real-time analytics
  const analytics = useRealTimeAnalytics(gameHistory, currentBalance, initialBalance);
  
  // Format financial values to 2 decimal places with currency
  const formatCurrency = (value: number) => `$${Math.abs(value).toFixed(2)}`;
  
  // Format percentages to 1 decimal place
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;
  
  // Helper to determine if a percentage trend is good
  const isGoodTrend = (metric: string, trend: 'up' | 'down') => {
    const goodUptrends = ['winRate', 'roi', 'responsibleGamblingScore'];
    const goodDowntrends = ['maxDrawdown', 'lossChasing', 'rapidBettingPercentage'];
    
    if (goodUptrends.includes(metric)) {
      return trend === 'up';
    } else if (goodDowntrends.includes(metric)) {
      return trend === 'down';
    }
    return false;
  };
  
  const getTrendFromValue = (value: number, threshold = 0): 'up' | 'down' | 'neutral' => {
    if (value > threshold) return 'up';
    if (value < threshold) return 'down';
    return 'neutral';
  };
  
  const renderOverviewTab = () => {
    return (
      <div>
        <div className="mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Your Gambling Overview</h3>
          <p className="mt-1 text-sm text-gray-500">
            Real-time analytics based on your betting patterns
          </p>
          
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Metric 
              title="Responsible Gambling Score" 
              value={Math.round(analytics.responsibleGamblingScore)} 
              subValue="/100"
              tooltipText="100 is optimal. Lower scores indicate potential high-risk gambling behavior."
            />
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500 flex items-center">
                Risk Level
                <span className="group relative ml-2">
                  <span className="cursor-help rounded-full bg-gray-100 p-1">
                    <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="pointer-events-none absolute left-0 -top-10 w-48 rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    Assessment of your overall gambling risk based on your behavior patterns.
                  </span>
                </span>
              </dt>
              <dd className="mt-1 flex items-baseline">
                <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                  <RiskLevel level={analytics.riskLevel} size="lg" />
                </div>
              </dd>
            </div>
            <Metric 
              title="Net Profit" 
              value={formatCurrency(analytics.netProfit)} 
              trend={getTrendFromValue(analytics.netProfit)}
              trendLabel={analytics.netProfit >= 0 ? "from initial" : "from initial"}
              isGood={analytics.netProfit >= 0}
              tooltipText="Your total profit or loss since starting."
            />
            <Metric 
              title="Win Rate" 
              value={formatPercentage(analytics.winRate)}
              trend={getTrendFromValue(analytics.winRate, 50)}
              trendLabel={analytics.winRate >= 50 ? "above average" : "below average"}
              isGood={analytics.winRate >= 50}
              tooltipText="Percentage of bets that resulted in a win."
            />
            <Metric 
              title="ROI" 
              value={formatPercentage(analytics.roi)}
              trend={getTrendFromValue(analytics.roi)}
              trendLabel={analytics.roi >= 0 ? "positive" : "negative"}
              isGood={analytics.roi >= 0}
              tooltipText="Return on Investment: percentage gain or loss on your initial balance."
            />
            <Metric 
              title="Average Bet Size" 
              value={formatCurrency(analytics.avgBetSize)}
              subValue={`(${formatPercentage(analytics.avgBetPercentage)} of bankroll)`}
              tooltipText="Your average bet amount relative to your bankroll."
            />
          </div>
        </div>
        
        {/* Risk patterns section */}
        <div className="mt-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Detected Patterns</h3>
          <p className="mt-1 text-sm text-gray-500">
            Patterns in your betting behavior that might indicate potential issues
          </p>
          
          <div className="mt-4">
            {analytics.detectedPatterns.length > 0 ? (
              analytics.detectedPatterns.map((pattern, index) => (
                <PatternCard 
                  key={index}
                  title={pattern.title}
                  description={pattern.description}
                  severity={pattern.severity}
                  recommendation={pattern.recommendation}
                />
              ))
            ) : (
              <div className="bg-green-50 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">No Concerning Patterns Detected</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Your gambling behavior appears to be responsible based on available data. Keep it up!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  const renderBehavioralTab = () => {
    return (
      <div>
        <div className="mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Behavioral Analysis</h3>
          <p className="mt-1 text-sm text-gray-500">
            Insights about your betting behavior and habits
          </p>
          
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Metric 
              title="Bets Per Hour" 
              value={Math.round(analytics.betsPerHour)}
              tooltipText="Frequency of betting - high values may indicate rushed decision-making."
              isGood={analytics.betsPerHour < 20}
            />
            <Metric 
              title="Avg Time Between Bets" 
              value={`${Math.round(analytics.avgTimeBetweenBets)}s`}
              tooltipText="Average time taken between placing bets."
              isGood={analytics.avgTimeBetweenBets > 30}
            />
            <Metric 
              title="Rapid Betting" 
              value={formatPercentage(analytics.rapidBettingPercentage)}
              tooltipText="Percentage of bets placed within 10 seconds of the previous bet."
              isGood={analytics.rapidBettingPercentage < 30}
              trend={getTrendFromValue(analytics.rapidBettingPercentage, 30)}
              trendLabel={analytics.rapidBettingPercentage >= 30 ? "concerning" : "healthy"}
            />
            <Metric 
              title="Session Duration" 
              value={`${Math.round(analytics.avgSessionDuration)} min`}
              tooltipText="How long your average gambling session lasts."
              isGood={analytics.avgSessionDuration < 60}
            />
            <Metric 
              title="Loss Chasing Score" 
              value={Math.round(analytics.lossChasing)}
              subValue="/100"
              tooltipText="Higher values indicate tendency to increase bet size after losses."
              isGood={analytics.lossChasing < 30}
              trend={getTrendFromValue(analytics.lossChasing, 30)}
              trendLabel={analytics.lossChasing >= 30 ? "concerning" : "healthy"}
            />
            <Metric 
              title="Risk After Loss" 
              value={`+${formatPercentage(analytics.riskIncreaseAfterLoss)}`}
              tooltipText="How much you tend to increase your bet size after a loss."
              isGood={analytics.riskIncreaseAfterLoss < 20}
            />
          </div>
        </div>
        
        {/* Behavioral insights */}
        <div className="mt-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Behavioral Insights</h3>
          
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Bet Frequency Pattern</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.betFrequencyTrend === 'increasing' 
                      ? 'Your betting frequency is increasing, which could indicate growing engagement.'
                      : analytics.betFrequencyTrend === 'decreasing'
                      ? 'Your betting frequency is decreasing, which might indicate reduced interest.'
                      : 'Your betting frequency is stable.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Session Length Pattern</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.sessionLengthTrend === 'increasing' 
                      ? 'Your sessions are getting longer, which might lead to decision fatigue.'
                      : analytics.sessionLengthTrend === 'decreasing'
                      ? 'Your sessions are getting shorter, which is generally a healthy trend.'
                      : 'Your session lengths are consistent.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Game Switching</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.gameSwitchingFrequency > 50
                      ? 'You switch games frequently, which might indicate searching for a "lucky" game.'
                      : analytics.gameSwitchingFrequency > 20
                      ? 'You occasionally switch between different games.'
                      : 'You tend to stick with the same games, showing consistent preferences.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Risk Taking</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.avgBetPercentage > 20
                      ? 'You tend to place high-risk bets relative to your bankroll.'
                      : analytics.avgBetPercentage > 10
                      ? 'Your bet sizing shows moderate risk-taking behavior.'
                      : 'Your bet sizing is generally conservative and sustainable.'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderFinancialTab = () => {
    return (
      <div>
        <div className="mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Financial Metrics</h3>
          <p className="mt-1 text-sm text-gray-500">
            Detailed analysis of your betting financials
          </p>
          
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Metric 
              title="Net Profit" 
              value={formatCurrency(analytics.netProfit)}
              trend={getTrendFromValue(analytics.netProfit)}
              trendLabel={analytics.netProfit >= 0 ? "profit" : "loss"}
              isGood={analytics.netProfit >= 0}
            />
            <Metric 
              title="ROI" 
              value={formatPercentage(analytics.roi)}
              tooltipText="Return on Investment - percentage gain/loss on initial balance."
              isGood={analytics.roi >= 0}
            />
            <Metric 
              title="Win/Loss Ratio" 
              value={analytics.winLossRatio.toFixed(2)}
              tooltipText="Ratio of wins to losses. Values above 1.0 mean more wins than losses."
              isGood={analytics.winLossRatio >= 1.0}
            />
            <Metric 
              title="Max Drawdown" 
              value={formatPercentage(analytics.maxDrawdown)}
              tooltipText="Maximum percentage drop from a peak balance to a trough."
              isGood={analytics.maxDrawdown < 30}
            />
            <Metric 
              title="Volatility Index" 
              value={Math.round(analytics.volatilityIndex)}
              tooltipText="Measure of how much your results fluctuate. Higher values indicate greater swings."
              isGood={analytics.volatilityIndex < 50}
            />
            <Metric 
              title="Max Bet Size" 
              value={formatCurrency(analytics.maxBetSize)}
              subValue={`(${formatPercentage(analytics.maxBetPercentage)} of bankroll)`}
              tooltipText="Your largest bet as a percentage of your bankroll."
              isGood={analytics.maxBetPercentage < 20}
            />
          </div>
        </div>
        
        {/* Financial insights */}
        <div className="mt-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Financial Risk Assessment</h3>
          
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Bankroll Health</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.netProfit > 0
                      ? 'Your bankroll is healthy and growing, showing successful betting strategies.'
                      : analytics.netProfit > -0.2 * initialBalance
                      ? 'Your bankroll has seen minor losses, but remains relatively stable.'
                      : 'Your bankroll is significantly depleted. Consider reducing bet sizes.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Bet Sizing Risk</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.maxBetPercentage > 30
                      ? 'Your maximum bets are very high-risk and could lead to significant losses.'
                      : analytics.maxBetPercentage > 15
                      ? 'Your bet sizes sometimes exceed recommended bankroll management limits.'
                      : 'Your bet sizing follows good bankroll management principles.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Volatility Assessment</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.volatilityIndex > 80
                      ? 'Your betting results are highly volatile, with large swings in your bankroll.'
                      : analytics.volatilityIndex > 40
                      ? 'Your betting results show moderate volatility.'
                      : 'Your betting results are relatively stable with predictable outcomes.'}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Sustainability</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {analytics.roi < -20
                      ? 'Your current betting strategy is not sustainable long-term.'
                      : analytics.roi < 0
                      ? 'Your betting is slightly negative but could become sustainable with adjustments.'
                      : 'Your betting strategy appears financially sustainable over time.'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'behavioral':
        return renderBehavioralTab();
      case 'financial':
        return renderFinancialTab();
      default:
        return renderOverviewTab();
    }
  };
  
  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Advanced Real-Time Analytics</h2>
        <div className="flex items-center text-xs text-gray-500">
          <ClockIcon className="h-4 w-4 mr-1" />
          Last updated: {new Date(analytics.lastUpdated).toLocaleTimeString()}
        </div>
      </div>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 font-medium text-sm rounded-md ${
            activeTab === 'overview'
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm rounded-md ${
            activeTab === 'behavioral'
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('behavioral')}
        >
          Behavioral Analysis
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm rounded-md ${
            activeTab === 'financial'
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('financial')}
        >
          Financial Metrics
        </button>
      </div>
      
      {renderActiveTab()}
    </div>
  );
};

export default RealTimeAnalyticsDashboard; 