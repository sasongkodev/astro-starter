import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">React Counter Demo</h2>
            <div className="flex items-center gap-4 justify-center">
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                    -
                </button>
                <span className="text-4xl font-bold text-white min-w-[60px] text-center">
                    {count}
                </span>
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                    +
                </button>
            </div>
            <p className="text-sm text-gray-300 mt-4 text-center">
                Click the buttons to test React interactivity
            </p>
        </div>
    );
}
