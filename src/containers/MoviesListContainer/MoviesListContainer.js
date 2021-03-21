import React, {useState} from "react";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import Modal from "../../components/Modal/Modal.js";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal.js";
import EdiMovieModal from "../../components/EditMovieModal/EditMovieModal.js";
import movies from "./movies.js";

export default function MoviesListContainer() {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [movieToDeleteId, setMovieToDeleteId] = useState(null);
  const [movieToEditId, setMovieToEditId] = useState(null);

  const showDeleteModal = (id) => {
    setIsDeleteModalShown(true);
    setMovieToDeleteId(id);
  }

  const hideDeleteModal = () => {
    setIsDeleteModalShown(false);
    setMovieToDeleteId(null);
  }

  const deleteMovie = () => {
    // Delete movie with id <movieToDeleteId>
    // Refresh movies list

    hideDeleteModal();
  }

  const showEditModal = (id) => {
    setIsEditModalShown(true);
    setMovieToEditId(id);
  }

  const hideEditModal = () => {
    setIsEditModalShown(false);
    setMovieToEditId(null);
  }

  const editMovie = () => {
    // Update movie with new data
    // Refresh movies list

    hideEditModal();
  }

  return (
    <>
      <MoviesList
        movies={movies}
        totalCount={movies.length}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal} />
      <Modal
        title="Delete movie"
        isShown={isDeleteModalShown}
        onClose={hideDeleteModal}
      >
        <DeleteMovieModal deleteMovie={deleteMovie} />
      </Modal>
      <Modal
        title="Edit movie"
        isShown={isEditModalShown}
        onClose={hideEditModal}
      >
        <EdiMovieModal editMovie={editMovie} movieId={movieToEditId}/>
      </Modal>
    </>
  );
}
