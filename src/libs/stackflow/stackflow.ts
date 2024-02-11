import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import Main from '@/app/screens/main';
import MainOnboarding from '@/app/screens/main-onboarding';
import Mbti1 from '@/app/screens/mbti/mbti-1';
import Mbti2 from '@/app/screens/mbti/mbti-2';
import Mbti3 from '@/app/screens/mbti/mbti-3';
import Onboarding1 from '@/app/screens/onboarding/onboarding-1';
import Onboarding2 from '@/app/screens/onboarding/onboarding-2';
import Onboarding3 from '@/app/screens/onboarding/onboarding-3';
import Profile from '@/app/screens/profile';
import SelectGame from '@/app/screens/select-game/selectgame';
import SmallTalk1 from '@/app/screens/small-talk/smalltalk-1';
import SmallTalk2 from '@/app/screens/small-talk/smalltalk-2';
import SmallTalk3 from '@/app/screens/small-talk/smalltalk-3';
import Splash from '@/app/screens/splash';
import WaitngRoom from '@/app/screens/wating-room';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    activities: {
        Main,
        MainOnboarding,
        Mbti1,
        Mbti2,
        Mbti3,
        Onboarding1,
        Onboarding2,
        Onboarding3,
        Profile,
        SelectGame,
        SmallTalk1,
        SmallTalk2,
        SmallTalk3,
        Splash,
        WaitngRoom,
    },
    plugins: [basicRendererPlugin(), basicUIPlugin({ theme: 'cupertino' })],
    initialActivity: () => 'Splash',
});
