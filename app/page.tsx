import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-5xl text-red-500 font-bold">
        Home Page ✅
      </h1>
      <Button variant='outline'>Кошик</Button>
    </div>
  );
}
