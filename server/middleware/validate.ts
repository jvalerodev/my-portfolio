import { NextApiRequest, NextApiResponse } from 'next';
import contactSchema from '@/helpers/yup/contactSchema';

type Schema = typeof contactSchema;

type Data = {
  success?: boolean;
  msg: string;
};

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => Promise<void>;

const validate = (schema: Schema, handler: Handler) => {
  return async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
      await schema.validate(req.body);
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ success: false, msg: 'All fields are required.' });
    }

    return handler(req, res);
  };
};

export default validate;
