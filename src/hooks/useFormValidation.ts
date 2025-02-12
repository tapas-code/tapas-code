import { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (field: string, value: string) => {
    let newErrors = { ...errors };
    
    switch (field) {
      case 'name':
        if (value.length < 2) {
          newErrors.name = 'Name must be at least 2 characters long';
        } else {
          delete newErrors.name;
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'message':
        if (value.length < 10) {
          newErrors.message = 'Message must be at least 10 characters long';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  return { errors, validateField, isValid };
}