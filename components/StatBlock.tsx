type StatBlockProps = {
  value: string;
  label: string;
  sublabel?: string;
};

export function StatBlock({ value, label, sublabel }: StatBlockProps) {
  return (
    <div className="rounded-[2rem] border border-line bg-navy p-7">
      <p className="font-mono text-4xl font-bold text-mint">{value}</p>
      <p className="mt-3 font-semibold text-cloud">{label}</p>
      {sublabel && <p className="mt-2 text-sm text-mist">{sublabel}</p>}
    </div>
  );
}
