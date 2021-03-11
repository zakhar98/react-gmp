import React, { Component } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import Modal from "../../components/Modal/Modal.js";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal.js";
import EdiMovieModal from "../../components/EditMovieModal/EditMovieModal.js";
import movies from "./movies.js";

class MoviesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteModalShown: false,
      isEditModalShown: false,
      movieToDeleteId: null,
      movieToEditId: null,
    };
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  showDeleteModal(id) {
    this.setState({
      isDeleteModalShown: true,
      movieToDeleteId: id,
    });
  }

  hideDeleteModal() {
    this.setState({
      isDeleteModalShown: false,
      movieToDeleteId: null,
    });
  }

  deleteMovie() {
    // Delete movie with id <this.state.movieToDeleteId>
    // Refresh movies list

    this.hideDeleteModal();
  }

  showEditModal(id) {
    this.setState({
      isEditModalShown: true,
      movieToEditId: id,
    });
  }

  hideEditModal() {
    this.setState({
      isEditModalShown: false,
      movieToEditId: null,
    });
  }

  editMovie(movieData) {
    // Update movie with new data
    // Refresh movies list

    this.hideEditModal();
  }

  render() {
    return (
      <>
        <MoviesList
          movies={movies}
          totalCount={movies.length}
          showDeleteModal={this.showDeleteModal}
          showEditModal={this.showEditModal} />
        <Modal
          title="Delete movie"
          isShown={this.state.isDeleteModalShown}
          onClose={this.hideDeleteModal}
        >
          <DeleteMovieModal deleteMovie={this.deleteMovie} />
        </Modal>
        <Modal
          title="Edit movie"
          isShown={this.state.isEditModalShown}
          onClose={this.hideEditModal}
        >
          <EdiMovieModal editMovie={this.editMovie} movieId={this.state.movieToEditId}/>
        </Modal>
      </>
    );
  }
}
export default MoviesListContainer;
