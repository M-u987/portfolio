export default function ContactInfo({ info }) {
  return (
    <div className="space-y-4">
      {info.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <Icon className="w-5 h-5" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
