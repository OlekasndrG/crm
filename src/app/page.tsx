'use client';
import { useRouter } from 'next/navigation';
import Button from './components/button';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/companies');
  };
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Button onClick={handleClick}>Go to Companies Page</Button>
    </main>
  );
}
