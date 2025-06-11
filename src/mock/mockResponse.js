export const mockResponse = {
  steps: [
    "Let's start by identifying the type of equation.",
    "This is a two-step linear equation.",
    "Step 1: Subtract 3 from both sides: `2x + 3 = 11` becomes `2x = 8`.",
    "Step 2: Divide both sides by 2: `x = 4`.",
    "_Remember: Always reverse the operations to isolate the variable._"
  ],
  hint: "What happens if you subtract 3 first? Can you isolate the variable?",
  visual: {
    type: "graph",
    data: [
      { x: -1, y: 1 },
      { x: 0, y: 3 },
      { x: 1, y: 5 },
      { x: 2, y: 7 }
    ]
  }
};
