import React, { ReactNode } from "react";

type ModalLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function ModalLayout({
  children,
  className,
}: ModalLayoutProps): JSX.Element {
  return (
    <>
      <div
        className={`relative flex flex-col rounded-[12px] box-border ${className}`}
      >
        {children}
      </div>
    </>
  );
}
