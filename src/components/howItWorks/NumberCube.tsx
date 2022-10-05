export type NumberCubeProps = { number: number };

const NumberCube = ({ number }: NumberCubeProps) => {
  return (
    <div className="flex h-20 w-20 bg-instillNeonBlue">
      <div className="m-auto font-mono text-5xl font-normal">{number}</div>
    </div>
  );
};

export default NumberCube;
