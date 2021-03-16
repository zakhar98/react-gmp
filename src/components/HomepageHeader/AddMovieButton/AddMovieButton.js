import React, {useState, useCallback} from "react";
import Modal from "../../Modal/Modal.js";
import AddMovieModal from "./AddMovieModal/AddMovieModal.js";
import "./style.scss";

export default function AddMovieButton(){
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = useCallback(() => {
    setIsModalShown(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsModalShown(false);
  }, []);

  return (
    <>
      <button
        onClick={showModal}
        className="add-movie-button"
        >
          + add movie
      </button>
      <Modal
        title="Add movie"
        isShown={isModalShown}
        onClose={hideModal}
        >
          <AddMovieModal />
      </Modal>
    </>
  );
}
