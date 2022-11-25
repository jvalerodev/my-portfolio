import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

interface Props {
  visible: number;
  handleVisible: (n: number) => void;
}

const ViewProjects = ({ visible, handleVisible }: Props) => {
  return (
    <div className="flex justify-center">
      {visible === 6 ? (
        <span
          className="hover:bg-green-600 rounded-full py-2 px-2 transition ease-in-out hover:scale-105 cursor-pointer animate-pulse"
          onClick={() => handleVisible(9)}
        >
          <AiOutlinePlusCircle className="text-3xl" />
        </span>
      ) : (
        <div className="flex items-center space-x-5 mt-7">
          <a
            href="https://github.com/jvalerodev"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 transition ease-in-out hover:scale-105 duration-200 py-2 px-8 rounded-full"
          >
            View all
          </a>

          <span
            className="hover:bg-green-600 rounded-full py-2 px-2 transition ease-in-out hover:scale-105 cursor-pointer animate-pulse"
            onClick={() => handleVisible(6)}
          >
            <AiOutlineMinusCircle className="text-3xl" />
          </span>
        </div>
      )}
    </div>
  );
};

export default ViewProjects;
