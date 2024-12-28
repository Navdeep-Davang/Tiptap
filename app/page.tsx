// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Editor Page</h1>
      <div className="flex justify-center gap-8">
        {/* Card 1: RichTextEditor */}
        <div className="border border-gray-300 rounded-lg p-6 w-64 text-center shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Rich Text Editor</h2>
          <p className="text-gray-600 mb-4">
            A powerful rich text editing experience.
          </p>
          <Link href="/RichTextEditor" className="text-blue-500 font-medium hover:underline">
            Go to Editor
          </Link>
        </div>

        {/* Card 2: Textap */}
        <div className="border border-gray-300 rounded-lg p-6 w-64 text-center shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Textap</h2>
          <p className="text-gray-600 mb-4">
            A sleek text editing tool with modern features.
          </p>
          <Link href="/Textap" className="text-blue-500 font-medium hover:underline">
            Go to Textap
          </Link>
        </div>

        {/* Card 3: NoteEditor */}
        <div className="border border-gray-300 rounded-lg p-6 w-64 text-center shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Note Editor</h2>
          <p className="text-gray-600 mb-4">
            Collaborative note-taking made simple.
          </p>
          <Link href="/NoteEditor" className="text-blue-500 font-medium hover:underline">
            Go to Editor
          </Link>
        </div>
      </div>
    </div>
  );
}
