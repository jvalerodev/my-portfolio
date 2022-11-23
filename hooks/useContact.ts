import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from '@/config/axios';
import schema from '@/helpers/yup/contactSchema';

type ResultState = {
  success?: boolean;
  msg: string;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  msg: string;
};

const useContact = () => {
  const [result, setResult] = useState<ResultState | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      const res = await axiosClient.post('/api/contact', data);
      setResult(res.data);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResult(error.response?.data);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!result) return;

    setTimeout(() => {
      setResult(null);
    }, 5000);
  }, [result]);

  return {
    result,
    loading,
    errors,
    register,
    handleSubmit,
    onSubmit
  };
};

export default useContact;
