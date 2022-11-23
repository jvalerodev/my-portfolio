import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';
import useContact from '@/hooks/useContact';

const ContactForm = () => {
  const { result, loading, errors, handleSubmit, onSubmit, register } =
    useContact();

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {loading && <Spinner />}

      {result && (
        <Alert
          msg={result.msg}
          color={`${result.success ? 'bg-green-500' : 'bg-red-500'}`}
        />
      )}

      <div className="mb-5">
        {errors.name && (
          <Alert msg={errors.name.message} color={'bg-red-500'} />
        )}

        <input
          type="text"
          id="name"
          placeholder="Name *"
          className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
          {...register('name')}
        />
      </div>

      <div className="lg:flex lg:space-x-3 space-y-5 lg:space-y-0 mb-5">
        <div className="lg:w-1/2">
          {errors.email && (
            <Alert msg={errors.email.message} color={'bg-red-500'} />
          )}

          <input
            type="text"
            id="email"
            placeholder="Email *"
            className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
            {...register('email')}
          />
        </div>

        <div className="lg:w-1/2">
          {errors.subject && (
            <Alert msg={errors.subject.message} color={'bg-red-500'} />
          )}

          <input
            type="text"
            id="subject"
            placeholder="Subject *"
            className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
            {...register('subject')}
          />
        </div>
      </div>

      <div className="mb-5">
        {errors.msg && <Alert msg={errors.msg.message} color={'bg-red-500'} />}

        <textarea
          id="msg"
          placeholder="Your message... *"
          className="block bg-transparent px-3 py-2 w-full h-36 resize-none outline-none border border-white transition focus:border-green-500"
          {...register('msg')}
        ></textarea>
      </div>

      <div className="text-center">
        <input
          type="submit"
          className="bg-green-500 hover:bg-green-600 rounded-full py-2 px-4 cursor-pointer"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
