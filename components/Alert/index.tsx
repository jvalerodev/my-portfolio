import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface Props {
  msg: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  color: string;
}

const Alert = ({ msg, color }: Props) => {
  return (
    <div className={`w-full mb-5 ${color}`}>
      <p className="text-center p-2 font-bold">{msg?.toString()}</p>
    </div>
  );
};

export default Alert;
