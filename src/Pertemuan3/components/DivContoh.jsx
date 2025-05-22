export default function DivContoh({ className1, text,className2}) {
  return (
    <>
      <div className={className1}>
        <p className={className2}>{text}</p>
      </div>
    </>
  );
}
