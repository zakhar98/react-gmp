import React, {Component} from "react";
import PropTypes from "prop-types";
import CustomButton from "../../../CustomButton/CustomButton.js";
import CustomInput from "../../../CustomInput/CustomInput.js";
import CustomMultiselect from "../../../CustomMultiselect/CustomMultiselect.js";
import "./style.scss";

const genreOptions = [
  {
    name: 'Drama',
    value: 'drama',
  }, {
    name: 'Crime',
    value: 'crime',
  }, {
    name: 'Comedy',
    value: 'comedy',
  }
];

class AddMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      releaseDate: "",
      movieUrl: "",
      genre: [],
      overview: "",
      runtime: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Dispatch create movie action

    this.props.onClose();
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({
      title: "",
      releaseDate: "",
      movieUrl: "",
      genre: [],
      overview: "",
      runtime: "",
    });
  }

  render() {
    return (
      <form
        className="add-movie-form"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <div className="add-movie-form__content">
          <CustomInput
            label="Title"
            name="title"
            id="title"
            type="text"
            value={this.state.title}
            placeholder="Title here"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Release date"
            name="releaseDate"
            id="release-date"
            type="date"
            value={this.state.releaseDate}
            placeholder="Select Date"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Movie URL"
            name="movieUrl"
            id="movie-url"
            type="url"
            value={this.state.movieUrl}
            placeholder="Movie URL here"
            onChange={this.handleInputChange}
          />
          <CustomMultiselect
            label="Genre"
            name="genre"
            placeholder="Select Genre"
            options={genreOptions}
            value={this.state.genre}
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Overview"
            name="overview"
            id="overview"
            type="text"
            value={this.state.overview}
            placeholder="Overview here"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Runtime"
            name="runtime"
            id="runtime"
            type="text"
            value={this.state.runtime}
            placeholder="Runtime here"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="add-movie-form__footer">
          <CustomButton type="reset" outlined>RESET</CustomButton>
          <CustomButton type="submit">SUBMIT</CustomButton>
        </div>
      </form>
    );
  }
}

AddMovieModal.propTypes = {
  onClose: PropTypes.func,
};

export default AddMovieModal;
