import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const Main: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onPush = () => {
    push('WaitngRoom', {});
  };

  const onBack = () => {
    push('Profile', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center w-full h-screen bg-slate-400">
        <button onClick={onPush}>게임하러 가기</button>
        <button onClick={onBack}>프로필 설정 돌아가기</button>
      </div>
    </AppScreen>
  );
};

export default Main;
