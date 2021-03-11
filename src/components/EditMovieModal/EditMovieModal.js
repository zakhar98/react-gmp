import React, {Component} from "react";
import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton.js";
import CustomInput from "../CustomInput/CustomInput.js";
import CustomMultiselect from "../CustomMultiselect/CustomMultiselect.js";
import "./style.scss";

const fetchMovie = () => ({
  title: "Some movie",
  releaseDate: "2018-07-22",
  movieUrl: "https://thumbs.dfs.ivi.ru/storage38/contents/a/b/f291cdd28726eb4d9f54e0b25a40b5.jpg",
  genre: ["comedy", "crime"],
  overview: "Movie overview",
  runtime: "120 min",
});

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

class EditMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        releaseDate: "",
        movieUrl: "",
        genre: [],
        overview: "",
        runtime: "",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    // fetch movie data by id
    // toggle isFetching flag if needed
    const movie = fetchMovie(this.props.movieId);
    this.setState({movie});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      movie: {
        ...this.state.movie,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.editMovie(this.state.movie)
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({movie: {
      title: "",
      releaseDate: "",
      movieUrl: "",
      genre: [],
      overview: "",
      runtime: "",
    }});
  }

  render() {
    return (
      <form
        className="edit-movie-form"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <div className="edit-movie-form__content">
          <CustomInput
            label="Title"
            name="title"
            id="title"
            type="text"
            value={this.state.movie.title}
            placeholder="Title here"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Release date"
            name="releaseDate"
            id="release-date"
            type="date"
            value={this.state.movie.releaseDate}
            placeholder="Select Date"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Movie URL"
            name="movieUrl"
            id="movie-url"
            type="url"
            value={this.state.movie.movieUrl}
            placeholder="Movie URL here"
            onChange={this.handleInputChange}
          />
          <CustomMultiselect
            label="Genre"
            name="genre"
            placeholder="Select Genre"
            options={genreOptions}
            value={this.state.movie.genre}
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Overview"
            name="overview"
            id="overview"
            type="text"
            value={this.state.movie.overview}
            placeholder="Overview here"
            onChange={this.handleInputChange}
          />
          <CustomInput
            label="Runtime"
            name="runtime"
            id="runtime"
            type="text"
            value={this.state.movie.runtime}
            placeholder="Runtime here"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="edit-movie-form__footer">
          <CustomButton type="reset" outlined>RESET</CustomButton>
          <CustomButton type="submit">SUBMIT</CustomButton>
        </div>
      </form>
    );
  }
}

EditMovieModal.propTypes = {
  movieId: PropTypes.number,
  editMovie: PropTypes.func.isRequired,
};

export default EditMovieModal;
