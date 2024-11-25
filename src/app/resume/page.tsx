'use client';

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex-1 w-full max-w-5xl py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Resume
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              View or download my professional resume below.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            {/* Embed PDF using the object tag */}
            <object
              data="/Keegan-Gaffney-Resume.pdf"
              type="application/pdf"
              className="w-full h-[600px] border"
            >
              {/* Fallback message for unsupported browsers */}
              <p>
                Your browser does not support PDFs. Download the PDF to view it: 
                <a href="/Keegan-Gaffney-Resume.pdf" download className="text-blue-500 underline"> Download Resume</a>
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  );
}
