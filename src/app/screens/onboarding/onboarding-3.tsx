import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Onboarding3: ActivityComponentType = ({ params }) => {
  const { replace, push } = useFlow();

  const onPush = () => {
    replace('Profile', {});
  };

  const onBack = () => {
    push('Onboarding2', {});
  };

  const endOnboarding = () => {
    replace('Profile', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen bg-purple-300">
        <button onClick={onPush}>프로필 설정하러 가기</button>
        <button onClick={onBack}>이전 화면으로</button>
        <button onClick={endOnboarding}>스킵하기</button>
      </div>
    </AppScreen>
  );
};

export default Onboarding3;
