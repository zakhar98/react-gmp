import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import Modal from "../../components/Modal/Modal.js";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal.js";
import EdiMovieModal from "../../components/EditMovieModal/EditMovieModal.js";
import useComponentDidMount from "../../utils/hooks.js";
import {useParams} from "react-router-dom";
import {fetchMovies, deleteMovie, editMovie} from "../../redux/actions/movies-list_actions.js"

function MoviesListContainer(
  {movies, totalCount, searchParams, fetchMovies, updateMovie, deleteMovieById}) {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [movieToDeleteId, setMovieToDeleteId] = useState(null);
  const [movieToEditId, setMovieToEditId] = useState(null);

  let { searchQuery } = useParams();
 
  useComponentDidMount(() => {
    fetchMovies({
      ...searchParams,
      search: searchQuery ?? searchParams.search,
    });
  });

  const showDeleteModal = (id) => {
    setIsDeleteModalShown(true);
    setMovieToDeleteId(id);
  }

  const hideDeleteModal = () => {
    setIsDeleteModalShown(false);
    setMovieToDeleteId(null);
  }

  const deleteMovie = async () => {
    await deleteMovieById(movieToDeleteId);
    await fetchMovies(searchParams);

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

  const editMovie = async (movie) => {
    await updateMovie(movie)
    await fetchMovies(searchParams);

    hideEditModal();
  }

  return (
    <>
      <MoviesList
        movies={movies}
        totalCount={totalCount}
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

function mapStateToProps(state) {
  const {moviesList: {
    movies: {
      items,
      totalCount,
    },
    searchParams,
  }} = state;

  return {
    movies: items,
    totalCount,
    searchParams,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: (params) => {return dispatch(fetchMovies(params))},
    deleteMovieById: (movieId) => {return dispatch(deleteMovie(movieId))},
    updateMovie: (movie) => {return dispatch(editMovie(movie))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);

MoviesListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  searchParams: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  deleteMovieById: PropTypes.func.isRequired,
};
