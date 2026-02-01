export default function Button({ text, href, download }) {
  return (
    <a
      href={href}
      download={download}
      className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition animate-trending"
    >
      {text}
    </a>
  );
}
