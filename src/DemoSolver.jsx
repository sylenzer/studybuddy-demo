import React, { useState } from 'react';
import { mockResponse } from './mock/mockResponse';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoSolver() {
  const [stepIndex, setStepIndex] = useState(0);

  const nextStep = () => {
    if (stepIndex < mockResponse.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
        🧠 StudyBuddy Demo Solver
      </h2>

      <p className="text-center text-gray-600 mb-6">
        Solve: <code className="font-mono text-black">2x + 3 = 11</code>
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 rounded p-4 mb-4 text-lg leading-relaxed"
        >
          {mockResponse.steps[stepIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="text-center">
        <button
          onClick={nextStep}
          className={`px-5 py-2 rounded font-semibold transition ${
            stepIndex === mockResponse.steps.length - 1
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
          disabled={stepIndex === mockResponse.steps.length - 1}
        >
          Next Step →
        </button>
      </div>

      <div className="mt-6 text-sm italic text-gray-500">
        💡 Hint: {mockResponse.hint}
      </div>
    </div>
  );
}
