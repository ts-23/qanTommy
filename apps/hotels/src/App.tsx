import { Card } from "@repo/ui/components";
import { PrimaryShellLayout } from "@repo/ui/layouts";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <PrimaryShellLayout>wegwegweg</PrimaryShellLayout>
      <h1 className="text-3xl font-bold underline bg-green-300">
        Hello world!
      </h1>
      <Card title={`title`}>asd </Card>
    </main>
  );
}
