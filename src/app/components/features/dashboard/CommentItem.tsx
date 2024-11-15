import type Comment from "../../../types/comment";
import EyeIconSvg from "./EyeIconSvg";

export default function CommentItem({
  comment,
  onClick,
}: {
  comment: Comment;
  onClick: () => void;
}): React.ReactNode {
  return (
    <>
      <li role="listitem" className="flex justify-between mx-4 items-center">
        <div className="w-3/4">
          <p>{comment.body}</p>
        </div>
        <button
          data-testid="comment-item-button"
          onClick={onClick}
          type="button"
          className="h-8 gap-1 px-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <EyeIconSvg />
          <span>Open</span>
        </button>
      </li>
      <hr
        role="separator"
        className="h-1 mx-8 my-3 border-0 rounded bg-gray-700"
      />
    </>
  );
}
