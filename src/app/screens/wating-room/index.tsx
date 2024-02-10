import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const WaitngRoom: ActivityComponentType = ({ params }) => {
  const { replace, push } = useFlow();

  const endGame = () => {
    replace('Main', {});
  };

  const startGame = () => {
    push('SelectGame', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={endGame}>나가기</button>
        <button onClick={startGame}>게임 진행</button>
      </div>
    </AppScreen>
  );
};

export default WaitngRoom;
