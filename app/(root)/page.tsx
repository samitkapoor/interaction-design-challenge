import AnimatedAvatarStack from '@/components/animated-avatar-stack';
import InteractiveFolder from '@/components/interactive-folder';
import OTPInput from '@/components/otp-input';
import PageTransition from '@/components/page-transition';
import ComponentWrapper from '@/components/ui/component-wrapper';
import Topbar from '@/components/ui/top-bar';
import { Lora } from 'next/font/google';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className="bg-background h-screen w-screen flex flex-col items-center overflow-y-auto pb-20">
      <Topbar />
      <h1
        className={`flex items-center gap-2 text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-20 text-center ${lora.className}`}
      >
        Peerlist&apos;s Interaction Design Challenge
      </h1>
      <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-center">
        Submissions by{' '}
        <a
          href="https://samitkapoor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold hover:text-black/80 underline"
        >
          Samit Kapoor
        </a>
      </p>
      <div className="flex flex-col items-center justify-center mt-20 gap-20">
        <ComponentWrapper
          style={{
            backgroundImage: 'url(/folder-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          title=""
          className="min-h-[450px]"
        >
          <InteractiveFolder />
        </ComponentWrapper>
        <ComponentWrapper title="Day 3 - Card To Page Transition" className="min-h-[450px]">
          <PageTransition />
        </ComponentWrapper>
        <ComponentWrapper title="Day 2 - Interactive OTP Input" className="min-h-[500px]">
          <OTPInput />
        </ComponentWrapper>
        <ComponentWrapper title="Day 1 - Animated Avatar Stack" className="min-h-[500px]">
          <AnimatedAvatarStack />
        </ComponentWrapper>
      </div>
    </div>
  );
}
