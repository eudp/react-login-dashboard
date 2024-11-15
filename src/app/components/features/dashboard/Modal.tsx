import type Comment from "../../../types/comment";
import CloseIcon from "./CloseIconSvg";

export default function Modal({
  closeModal,
  comment,
}: {
  closeModal: () => void;
  comment: Comment;
}): React.ReactNode {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        data-testid="modal-container"
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold" data-testid="modal-title">
            {comment.name}
          </h3>
          <button
            onClick={closeModal}
            data-testid="close-modal-button"
            className="text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>
        </div>
        <p data-testid="comment-id" className="text-gray-700 mb-2">
          ID: {comment.id}
        </p>
        <p data-testid="comment-email" className="text-gray-700 mb-2">
          Email: {comment.email}
        </p>
        <p data-testid="comment-body" className="text-gray-700">
          {comment.body}
        </p>

        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
