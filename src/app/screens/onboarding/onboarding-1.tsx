import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Onboarding1: ActivityComponentType = ({ params }) => {
  const { push, replace } = useFlow();

  const onPush = () => {
    push('Onboarding2', {});
  };

  const onBack = () => {
    push('Splash', {});
  };

  const endOnboarding = () => {
    replace('Profile', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen bg-purple-300">
        <button onClick={onPush}>온보딩 계속 보기</button>
        <button onClick={onBack}>이전 화면으로</button>
        <button onClick={endOnboarding}>스킵하기</button>
      </div>
    </AppScreen>
  );
};

export default Onboarding1;
