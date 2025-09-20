// resume/

export default function PdfEmbed() {
  return (
    <div className="w-full h-screen">
      <embed
        src="/Li_Resume.pdf"
        type="application/pdf"
        className="w-full h-full"
      />
    </div>
  );
}
