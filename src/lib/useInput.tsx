import { useState, useCallback } from 'react';

/*
 ** 질문
 ** initialForm의 type은 어떻게 작성해야 할까요?
 ** string으로 작성하면 오류가 발생합니다.
 */

export const useInput = (initialForm: any) => {
  const [form, setForm] = useState<any>(initialForm);
  const [isValid, setIsValid] = useState<boolean | null>(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // setForm((form: any) => ({ ...form, [name]: value }));
    setForm(e.target.value);
    if (e.target.value) setIsValid(true);
    else setIsValid(false);
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, handleChange, reset, isValid, setIsValid];
};
