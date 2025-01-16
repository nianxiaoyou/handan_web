import { Button } from 'antd';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div
      className={
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'
      }
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-3xl">Hello Handan</div>

        <Button type="link" onClick={() => router.push('/login')}>
          Start experiencing
        </Button>
      </main>
    </div>
  );
}
