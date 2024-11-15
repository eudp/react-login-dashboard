import { useState } from "react";
import { Header } from "../layout";
import type Comment from "../types/comment";
import { Modal, CommentList } from "../components/features/dashboard";

export default function DashboardPage(): React.ReactNode {
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const handleCommentSelect = (comment: Comment) => {
    setSelectedComment(comment);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CommentList onCommentSelect={handleCommentSelect} />
      </main>
      {selectedComment && (
        <Modal
          comment={selectedComment}
          closeModal={() => setSelectedComment(null)}
        />
      )}
    </div>
  );
}
