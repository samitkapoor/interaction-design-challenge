import AnimatedAvatarStack from '@/components/animated-avatar-stack';

export default function Home() {
  return (
    <div className="bg-background h-screen w-screen flex flex-col items-center">
      <h1 className="flex items-center gap-2 text-black text-3xl mt-20">
        <div className="flex items-end">
          <div className="h-9 w-9 rounded-3xl flex items-center justify-center">
            <img src="/peerlist.svg" className="w-full h-full" />
          </div>
          <p className="text-black/80 font-bold">eerlist&apos;s</p>
        </div>
        Interaction Design Challenge
      </h1>
      <div className="flex flex-col items-center justify-center mt-20 gap-20">
        <AnimatedAvatarStack />
      </div>
    </div>
  );
}
