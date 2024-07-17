type TInputProps = React.ComponentProps<"input"> & {
  style?: string;
};

export default function InputBox(props: TInputProps) {
  const { style, ...restProps } = props;
  return (
    <>
      <input
        {...restProps}
        className={`border-[#E3E3E3] border-[1px] w-[300px] h-[40px] px-3 ${props.style}`}
      />
    </>
  );
}
