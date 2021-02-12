import { React, useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [deValue, setDeValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return deValue;
};

export default useDebounce;
