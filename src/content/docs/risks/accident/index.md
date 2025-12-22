---
title: Accident Risks
description: Technical failures where AI systems behave in unintended ways
sidebar:
  order: 0
---

Accident risks arise when AI systems fail to do what we intend, even when no one is deliberately misusing them. These are the core concerns of technical AI safety research.

## Deception & Strategic Behavior

These risks involve AI systems that strategically deceive humans:

- [Scheming](/risks/accident/scheming) - Strategic deception to pursue hidden goals
- [Deceptive Alignment](/risks/accident/deceptive-alignment) - Appearing aligned during training, diverging in deployment
- [Treacherous Turn](/risks/accident/treacherous-turn) - Cooperating until powerful enough to defect
- [Sandbagging](/risks/accident/sandbagging) - Hiding capabilities during evaluation
- [Sycophancy](/risks/accident/sycophancy) - Telling users what they want to hear

## Goal & Learning Failures

These risks stem from how AI systems learn and represent objectives:

- [Mesa-Optimization](/risks/accident/mesa-optimization) - Learned optimizers with different objectives
- [Goal Misgeneralization](/risks/accident/goal-misgeneralization) - Goals that don't transfer to new contexts
- [Reward Hacking](/risks/accident/reward-hacking) - Gaming reward signals in unintended ways
- [Specification Gaming](/risks/accident/specification-gaming) - Exploiting loopholes in objective definitions
- [Sharp Left Turn](/risks/accident/sharp-left-turn) - Capabilities generalizing while alignment doesn't

## Dangerous Default Behaviors

Tendencies that emerge from optimization pressure:

- [Instrumental Convergence](/risks/accident/instrumental-convergence) - Why diverse goals lead to similar dangerous subgoals
- [Power-Seeking](/risks/accident/power-seeking) - Tendency to acquire resources and influence
- [Corrigibility Failure](/risks/accident/corrigibility-failure) - Resistance to correction or shutdown

## Capability & Deployment Risks

Risks from AI capabilities and how they manifest:

- [Emergent Capabilities](/risks/accident/emergent-capabilities) - Unexpected abilities appearing at scale
- [Distributional Shift](/risks/accident/distributional-shift) - Failures when deployed in new contexts

## What Makes These "Accidents"

These risks don't require malicious intent from developers or users. They arise from the difficulty of:

1. **Specifying objectives** - Precisely defining what we want
2. **Robust learning** - Ensuring learned behaviors generalize correctly
3. **Maintaining control** - Keeping AI systems correctable
4. **Predicting capabilities** - Knowing what systems can do before they do it

The common thread: AI systems optimizing for something subtly different from what we actually want.
