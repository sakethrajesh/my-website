import Gallery from '@/components/Gallery'
import { Divider } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className='text-4xl font-bold pt-7'>Hi, I'm <span className="text-primary">Saketh</span> 👋🏾</h1>
      <Divider className="my-4" />
      <p className='flex flex-col items-center px-8 mb-4'>I'm a software engineer with a passion for building web and mobile applications. I'm currently working on a project that involves building a social media platform for developers.</p>
      <Gallery />
    </div>
  );
}
