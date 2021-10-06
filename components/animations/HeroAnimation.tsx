import { FC } from 'react';
import HeroAnimationFishDrip from './HeroAnimationFishDrip';
import HeroAnimationMagicBall from './HeroAnimationMagicBall';
import HeroAnimationMain from './HeroAnimationMain';

interface Props {}

const HeroAnimation: FC<Props> = () => {
  return (
    <div style={{ display: 'grid' }}>
      <HeroAnimationFishDrip />
      <HeroAnimationMain />
      <HeroAnimationMagicBall />
    </div>
  );
};

export default HeroAnimation;
