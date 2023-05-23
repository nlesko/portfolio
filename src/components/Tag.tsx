const Tag = ({ children, color = "steel-blue", textColor = "white", textSize = "xs", bgAlpha="90" }: {
    children: React.ReactNode,
    color?: string,
    textSize?: string,
    textColor?: string,
    bgAlpha?: string,
}) => {
  return (
    <div
      className={`inline-block rounded-full py-2 px-3 bg-${color}-800/${bgAlpha} text-${textColor} text-${textSize} font-light tracking-[0.2rem]`}
    >
      {children}
    </div>
  );
};

export default Tag;