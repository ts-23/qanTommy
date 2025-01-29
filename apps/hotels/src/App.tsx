import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";

export default function App() {
  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      <ListingLayout
        items={[
          {
            title: "asdasd",
            subtitle: "sdsgd",
            // imageURL: "https://unsplash.it/145/125/?random",
          },
        ]}
      />
    </PrimaryShellLayout>
  );
}
