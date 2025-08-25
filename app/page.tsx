import AnimatedAvatarStack from '@/components/animated-avatar-stack';
import ComponentWrapper from '@/components/ui/component-wrapper';

export default function Home() {
  return (
    <div className="bg-background h-screen w-screen flex flex-col items-center">
      <h1 className="flex items-center gap-2 text-black text-3xl mt-20">
        Peerlist&apos;s Interaction Design Challenge
      </h1>
      <div className="flex flex-col items-center justify-center mt-20 gap-20">
        <ComponentWrapper className="min-h-[500px]">
          <AnimatedAvatarStack />
        </ComponentWrapper>
      </div>
    </div>
  );
}
