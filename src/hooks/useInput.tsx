import { useState, useCallback } from 'react';

export function useInput(initialForm: string) {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
    if (e.target.value) setIsValid(true);
    else setIsValid(false);
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, handleChange, reset, isValid, setIsValid] as const;
}
