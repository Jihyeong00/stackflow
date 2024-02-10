import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Onboarding2: ActivityComponentType = ({ params }) => {
  const { push, replace } = useFlow();

  const onPush = () => {
    push('Onboarding3', {});
  };

  const onBack = () => {
    push('Onboarding2', {});
  };

  const endOnboarding = () => {
    replace('Profile', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onPush}>온보딩 계속 보기</button>
        <button onClick={onBack}>이전 화면으로</button>
        <button onClick={endOnboarding}>스킵하기</button>
      </div>
    </AppScreen>
  );
};

export default Onboarding2;
