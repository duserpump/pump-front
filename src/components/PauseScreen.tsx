import { NETWORK } from 'utils/config';

const PauseScreen = () => {
  const app = NETWORK === 'mainnet' ? 'app' : 'beta';
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-[#131722]'>
      <span className='absolute left-4 top-3 animate-colorSwitch whitespace-nowrap text-xl font-bold'>
        Duser Pump
      </span>
      <span className='text-center text-3xl font-semibold'>
        The {app} is currently paused.
      </span>
      <span className='text-center text-xl font-extralight'>
        More details coming soon.
      </span>
    </div>
  );
};

export default PauseScreen;
