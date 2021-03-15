import React, {Component} from "react";
import Modal from "../../Modal/Modal.js";
import AddMovieModal from "./AddMovieModal/AddMovieModal.js";
import "./style.scss";

class AddMovieButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal() {
    this.setState({ isModalShown: true });
  }
  
  hideModal() {
    this.setState({ isModalShown: false });
  }

  render() {
    return (
      <>
        <button
          onClick={this.showModal}
          className="add-movie-button"
         >
           + add movie
        </button>
        <Modal
          title="Add movie"
          isShown={this.state.isModalShown}
          onClose={this.hideModal}
          >
            <AddMovieModal />
        </Modal>
      </>
    );
  }
}

export default AddMovieButton;
