import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const SmallTalk: ActivityComponentType = ({ params }) => {
  const { replace } = useFlow();

  const endGame = () => {
    replace('Main', {});
  };

  const waitingGame = () => {
    replace('WaitngRoom', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={endGame}>메인화면으로</button>
        <button onClick={waitingGame}>준비화면으로</button>
      </div>
    </AppScreen>
  );
};

export default SmallTalk;
