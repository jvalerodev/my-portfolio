import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="mt-10 md:mt-0">
      <div className="border border-white p-8 space-y-8">
        <p className="font-black uppercase">Contact Address</p>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <IoLocationSharp className="bg-green-500 text-4xl p-2 rounded-full" />
            <p className="font-light">Mérida, Venezuela</p>
          </div>

          <div className="flex items-center space-x-4">
            <MdEmail className="bg-green-500 text-4xl p-2 rounded-full" />
            <p className="font-light break-all">jvalerodev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="bg-green-500 text-4xl p-2 rounded-full" />
            <p className="font-light">+ (58) 412 765 4801</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
