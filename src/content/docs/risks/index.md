---
title: Risks & Failure Modes
description: Comprehensive catalog of AI-related risks from technical failures to societal harms
sidebar:
  order: 0
---

This section documents risks from AI systems across four major categories: accident risks (technical failures), misuse risks (intentional harm), structural risks (systemic and societal), and epistemic risks (threats to knowledge and truth).

## Risk Categories

### [Accident Risks](/risks/accident/)
Technical failures where AI systems behave in unintended ways, even without malicious intent. These are the core concerns of AI safety research.

**Deception & Strategic Behavior**
- [Scheming](/risks/accident/scheming) - Strategic deception to pursue hidden goals
- [Deceptive Alignment](/risks/accident/deceptive-alignment) - Appearing aligned during training, diverging in deployment
- [Treacherous Turn](/risks/accident/treacherous-turn) - Cooperating until powerful enough to defect
- [Sandbagging](/risks/accident/sandbagging) - Hiding capabilities during evaluation
- [Sycophancy](/risks/accident/sycophancy) - Telling users what they want to hear

**Goal & Learning Failures**
- [Mesa-Optimization](/risks/accident/mesa-optimization) - Learned optimizers with different objectives
- [Goal Misgeneralization](/risks/accident/goal-misgeneralization) - Goals that don't transfer to new contexts
- [Reward Hacking](/risks/accident/reward-hacking) - Gaming reward signals in unintended ways
- [Specification Gaming](/risks/accident/specification-gaming) - Exploiting loopholes in objective definitions
- [Sharp Left Turn](/risks/accident/sharp-left-turn) - Capabilities generalizing while alignment doesn't

**Dangerous Default Behaviors**
- [Instrumental Convergence](/risks/accident/instrumental-convergence) - Why diverse goals lead to similar dangerous subgoals
- [Power-Seeking](/risks/accident/power-seeking) - Tendency to acquire resources and influence
- [Corrigibility Failure](/risks/accident/corrigibility-failure) - Resistance to correction or shutdown

**Capability & Deployment Risks**
- [Emergent Capabilities](/risks/accident/emergent-capabilities) - Unexpected abilities appearing at scale
- [Distributional Shift](/risks/accident/distributional-shift) - Failures when deployed in new contexts

### [Misuse Risks](/risks/misuse/)
Intentional harmful applications of AI technology by malicious actors.

**Weapons**
- [Bioweapons](/risks/misuse/bioweapons) - AI-assisted pathogen design
- [Cyberweapons](/risks/misuse/cyberweapons) - Autonomous hacking and vulnerability exploitation
- [Autonomous Weapons](/risks/misuse/autonomous-weapons) - Lethal autonomous weapons systems

**Manipulation & Deception**
- [Disinformation](/risks/misuse/disinformation) - AI-generated propaganda at scale
- [Deepfakes](/risks/misuse/deepfakes) - Synthetic media for impersonation

**Surveillance & Control**
- [Mass Surveillance](/risks/misuse/surveillance) - AI-enabled monitoring at scale
- [Authoritarian Tools](/risks/misuse/authoritarian-tools) - AI for censorship and political control

### [Structural Risks](/risks/structural/)
Systemic risks from how AI reshapes society, institutions, and power dynamics.

**Power & Control**
- [Concentration of Power](/risks/structural/concentration-of-power) - AI enabling unprecedented power accumulation
- [Lock-in](/risks/structural/lock-in) - Permanent entrenchment of values or systems

**Competition & Coordination**
- [Racing Dynamics](/risks/structural/racing-dynamics) - Competition driving unsafe practices
- [Multipolar Trap](/risks/structural/multipolar-trap) - Competitive dynamics producing collectively bad outcomes
- [Proliferation](/risks/structural/proliferation) - Spread of dangerous capabilities

**Human Agency & Society**
- [Erosion of Human Agency](/risks/structural/erosion-of-agency) - Humans losing meaningful control
- [Enfeeblement](/risks/structural/enfeeblement) - Humanity losing capability to function without AI
- [Economic Disruption](/risks/structural/economic-disruption) - Mass displacement and restructuring

### [Epistemic Risks](/risks/epistemic/)
Risks to knowledge, truth, and our collective ability to understand reality.

- [Epistemic Collapse](/risks/epistemic/epistemic-collapse) - Inability to distinguish true from false
- [Trust Erosion](/risks/epistemic/trust-erosion) - Loss of faith in institutions and verification
- [Automation Bias](/risks/epistemic/automation-bias) - Over-reliance on AI outputs

## Risk Assessment Framework

Each risk profile includes:
- **Severity**: Low / Medium / High / Catastrophic
- **Likelihood**: Probability estimate with uncertainty
- **Timeframe**: When might this become relevant?
- **Status**: Theoretical, emerging, or currently occurring

## Observable vs Theoretical

| Currently Observable | Emerging | Theoretical/Future |
|---------------------|----------|-------------------|
| Sycophancy | Sandbagging | Scheming |
| Reward Hacking | Disinformation at scale | Treacherous Turn |
| Specification Gaming | Deepfakes | Sharp Left Turn |
| Racing Dynamics | Economic Disruption | Lock-in |
| Automation Bias | Emergent Capabilities | Corrigibility Failure |
| Trust Erosion | Concentration of Power | Power-Seeking AI |

Understanding observable failures helps us reason about future risks, though the relationship between current problems and future catastrophic risks is debated.

## How Categories Interact

These categories aren't independent:
- **Accident + Misuse**: Misuse is more dangerous when AI is more capable; accident risks determine capability levels
- **Structural + Accident**: Racing dynamics make accidents more likely by reducing safety investment
- **Epistemic + All**: If we can't agree on what risks exist, coordinating responses is impossible
- **Structural + Misuse**: Concentration of power determines who might misuse AI; proliferation determines who has access
