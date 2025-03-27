# Responsible Gambling Guidelines

## Purpose

The Risk-Reward Simulator is designed as an educational tool to help users understand gambling behaviors and promote responsible practices. This is NOT a platform for recreational gambling or real money betting.

## Core Principles

1. **Education Over Promotion**
   - Focus on learning outcomes
   - Avoid gamification of gambling behaviors
   - Emphasize understanding of risk and probability

2. **Transparency**
   - Clear communication of simulator nature
   - Explicit educational purpose
   - No misleading information

3. **Risk Awareness**
   - Real-time risk assessment
   - Clear warning systems
   - Behavioral pattern recognition

4. **Support Resources**
   - Easy access to help resources
   - Clear pathways to support
   - Educational content integration

5. **No Real Money**
   - Simulation-only environment
   - Virtual currency for educational purposes
   - Clear distinction from real gambling

## Implementation Guidelines

### Required Disclaimers

All simulation pages must include:

```html
<div class="bg-blue-100 p-4 rounded-lg mb-4">
  <p class="text-blue-800">
    This is an educational simulator designed to help understand gambling behaviors.
    No real money or gambling takes place on this platform.
  </p>
  <p class="text-blue-800 mt-2">
    If you're struggling with gambling, call 1-800-522-4700 for 24/7 support.
  </p>
</div>
```

### Risk Scoring System

#### Risk Score Calculation
```typescript
interface BetBehavior {
  betSize: number;
  frequency: number;
  timeSpent: number;
  eventSelection: string[];
}

function calculateRiskScore(behavior: BetBehavior): number {
  const sizeScore = behavior.betSize / maxRecommendedBet;
  const frequencyScore = behavior.frequency / maxRecommendedFrequency;
  const timeScore = behavior.timeSpent / maxRecommendedTime;
  
  return (sizeScore + frequencyScore + timeScore) / 3;
}
```

#### Risk Indicator Display
```typescript
function getRiskLevel(score: number): string {
  if (score >= 0.8) return 'High Risk';
  if (score >= 0.5) return 'Medium Risk';
  return 'Low Risk';
}
```

#### User Feedback
- Provide real-time risk assessments
- Display warning messages for high-risk patterns
- Offer suggestions for safer behavior

### Educational Content Integration

1. **Contextual Tips**
   - Display relevant educational content during simulations
   - Provide probability explanations
   - Show statistical outcomes

2. **Dedicated Educational Section**
   - Comprehensive guides on gambling concepts
   - Risk management strategies
   - Financial literacy resources

3. **Behavioral Insights**
   - Personal behavior analysis
   - Pattern recognition
   - Risk awareness tools

### Support Resources

1. **Helpline Information**
   - Prominent display of support numbers
   - 24/7 availability
   - Multiple contact methods

2. **Support Organizations**
   - Links to gambling support groups
   - Professional counseling resources
   - Self-exclusion information

## Content Guidelines

### Appropriate Language
- Use educational terms over gambling terminology
- Focus on learning outcomes
- Avoid triggering phrases

### Visual Elements
- No casino-style imagery
- Use abstract visualizations
- Focus on data representation

## User Protection Features

### Session Limits
```typescript
interface SessionLimits {
  duration: number; // minutes
  betCount: number;
  riskThreshold: number;
}

const defaultLimits: SessionLimits = {
  duration: 30,
  betCount: 20,
  riskThreshold: 0.7
};
```

### Reality Checks
- Time spent notifications
- Pattern alerts
- Risk level updates

### Self-Assessment
- Regular prompts for self-evaluation
- Behavior pattern reviews
- Risk awareness questionnaires

## Implementation Checklist

- [ ] Disclaimer implementation
- [ ] Risk scoring system
- [ ] Educational content integration
- [ ] Support resource links
- [ ] Session limits
- [ ] Reality check system
- [ ] Self-assessment tools
- [ ] Visual guidelines compliance
- [ ] Content review
- [ ] Accessibility check

## Developer Resources

### Required Components
- RiskScoreCalculator
- DisclaimerBanner
- SupportResourcesPanel
- SessionLimitManager
- RealityCheckModal
- EducationalContentManager

### Integration Points
- User registration
- Simulation start
- Betting actions
- Session management
- Educational content
- Support access

## Compliance Review

New features must be reviewed for:
1. Educational value
2. Risk management
3. Support integration
4. Content guidelines
5. User protection
6. Accessibility
7. Responsible gambling principles 