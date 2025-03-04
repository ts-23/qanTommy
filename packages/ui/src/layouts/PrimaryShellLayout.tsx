import type { PropsWithChildren } from "react";

type PrimaryShellLayoutProps = { logoUrl?: string } & PropsWithChildren;

export function PrimaryShellLayout(props: PrimaryShellLayoutProps) {
  return (
    <div className="p-8">
      <div
        className={"w-full h-24 bg-no-repeat"}
        style={{
          backgroundImage: `url(${props.logoUrl})`,
        }}
      />
      {props.children}
    </div>
  );
}
