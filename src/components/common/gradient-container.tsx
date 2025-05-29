interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function GradientContainer({ children }: Props) {
  return (
    <>
      <div className="z-10 pointer-events-none size-[80vh] fixed top-[-30vh] pink-radial-gradient opacity-10 -left-1/4" />
      <div className="z-10 pointer-events-none size-[80vh] fixed bottom-[-10vh] blue-radial-gradient opacity-10 -left-1/4" />
      {children}
    </>
  );
}
