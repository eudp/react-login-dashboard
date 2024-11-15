import { Virtuoso } from "react-virtuoso";
import Loading from "./Loading";
import CommentItem from "./CommentItem";
import { useComments } from "../../../hooks";
import { ErrorPage } from "../../../pages";
import type Comment from "../../../types/comment";

export default function CommentList({
  onCommentSelect,
}: {
  onCommentSelect: (comment: Comment) => void;
}): React.ReactNode {
  const { isLoading, comments, error } = useComments();

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="mb-4 text-2xl font-semibold text-white mx-4">Comments:</h2>
      <Virtuoso
        data={comments}
        itemContent={(index) => (
          <CommentItem
            key={comments[index].id}
            comment={comments[index]}
            onClick={() => onCommentSelect(comments[index])}
          />
        )}
        style={{ height: 800 }}
        totalCount={comments.length}
        className="space-y-2 text-gray-400"
        role="list"
      />
    </div>
  );
}
