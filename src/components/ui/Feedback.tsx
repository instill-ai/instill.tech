const Feedback: React.FC = () => {
  return (
    <div className="mx-1 my-auto">
      <div className="fixed bottom-4 right-4">
        <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-600">
          <a
            href="https://github.com/instill-ai/community/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback
          </a>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
