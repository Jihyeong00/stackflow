import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Profile: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onMain = () => {
    push('Main', {});
  };
  const onMainOnboarding = () => {
    push('MainOnboarding', {});
  };

  const onBack = () => {
    push('Splash', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onMain}>프로필 설정 완료</button>
        <button onClick={onMainOnboarding}>메인 화면 소개 온보딩 보기</button>
        <button onClick={onBack}>온보딩 다시보기</button>
      </div>
    </AppScreen>
  );
};

export default Profile;
