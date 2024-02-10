import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '@/libs/stackflow/stackflow';

const SelectGame: ActivityComponentType = ({ params }) => {
  const { push } = useFlow();

  const startMbti = () => {
    push('Mbti1', {});
  };
  const startSmallTalk = () => {
    push('SmallTalk1', {});
  };

  return (
    <AppScreen>
      <div className="flex flex-col text-center">
        <button onClick={startMbti}>mbti 진행하기</button>
        <button onClick={startSmallTalk}>small-talk 진행하기</button>
      </div>
    </AppScreen>
  );
};

export default SelectGame;
