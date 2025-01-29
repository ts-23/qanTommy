import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";

export default function App() {
  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      <ListingLayout items={[]} />
    </PrimaryShellLayout>
  );
}
