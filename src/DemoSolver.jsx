import React, { useState } from 'react';
import { mockResponse } from './mock/mockResponse';

export default function DemoSolver() {
  const [stepIndex, setStepIndex] = useState(0);

  const nextStep = () => {
    if (stepIndex < mockResponse.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <div className="solver-container">
      <h2 className="text-xl font-bold mb-2">🧠 Demo Problem Solver</h2>
      <p className="mb-4 italic">Try solving: <strong>2x + 3 = 11</strong></p>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-lg">{mockResponse.steps[stepIndex]}</p>
      </div>

      <button
        onClick={nextStep}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        disabled={stepIndex === mockResponse.steps.length - 1}
      >
        Next Step →
      </button>

      <div className="mt-6">
        <p className="text-sm text-gray-600 italic">Hint: {mockResponse.hint}</p>
      </div>
    </div>
  );
}
