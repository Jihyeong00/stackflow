import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const MainOnboarding: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const onClick = () => {
    push('Main', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={onClick}>메인화면으로</button>
      </div>
    </AppScreen>
  );
};

export default MainOnboarding;
