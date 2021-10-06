import { FC } from 'react';
import HeroAnimation from '../components/animations/HeroAnimation';

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div className="bg-[#063477]">
      <HeroAnimation />
    </div>
  );
};

export default Home;
