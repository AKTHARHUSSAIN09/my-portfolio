import { useState, useEffect } from 'react';

export default function useTypewriter(words, options = {}) {
  const { typingSpeed = 80, deletingSpeed = 40, pauseTime = 2500 } = options;
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex];
    let timeout;

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseTime);
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
