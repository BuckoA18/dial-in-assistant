const Detail = ({ label, children }) => (
  <div className="flex flex-col">
    <span className="text-[10px] font-bold tracking-wide text-stone-400 uppercase">
      {label}
    </span>
    <span className="font-medium text-stone-700">{children}</span>
  </div>
);

export default Detail;
