export default function Button({ text, href, download }) {
  return (
    <div className="flex px-10 mt-6">
      <a
      href={href}
      download={download}
      className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition animate-trending"
    >
      {text}
    </a>
    </div>
  );
}
