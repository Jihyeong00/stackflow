import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Splash: ActivityComponentType = ({ params }) => {
  const { replace } = useFlow();

  const onProfile = () => {
    replace('Profile', {});
  };
  const onBoarding = () => {
    replace('Onboarding1', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onProfile}>profile</button>
        <button onClick={onBoarding}>onboarding</button>
      </div>
    </AppScreen>
  );
};

export default Splash;
