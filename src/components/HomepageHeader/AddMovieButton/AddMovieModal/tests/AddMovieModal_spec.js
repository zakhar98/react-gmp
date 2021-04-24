import React from "react";
import AddMovieModal from "../AddMovieModal.js";
import { screen, render, queryByAttribute, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { Provider } from "react-redux";
import ApiService from "../../../../../services/api_service.js"

jest.mock("../../../../../services/api_service", () => ({
  createMovie: jest.fn(() => {}),
  fetchMovies: jest.fn(() => {}),
}));

const onModalClose = jest.fn(() => {});

const initialState = {
  moviesList: {
    searchParams: {},
  },
};

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(() => initialState)

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

describe("AddMovieModal", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display all input fields", async () => {
    render(<AddMovieModal onClose={onModalClose} />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Release date")).toBeInTheDocument();
    expect(screen.getByLabelText("Movie URL")).toBeInTheDocument();
    expect(screen.getByLabelText("Genre")).toBeInTheDocument();
    expect(screen.getByLabelText("Overview")).toBeInTheDocument();
    expect(screen.getByLabelText("Runtime")).toBeInTheDocument();
  });

  it("should submit form by click on submit if all values are filled in", async () => {
    render(<AddMovieModal onClose={onModalClose} />, { wrapper: Wrapper });

    await userEvent.type(screen.getByLabelText("Title"), "Some Title", { delay: 1 });
    await userEvent.type(screen.getByLabelText("Release date"), "2020-01-02");
    await userEvent.type(screen.getByLabelText("Movie URL"), "https://www.google.by/", { delay: 1 });
    await userEvent.type(screen.getByLabelText("Overview"), "Some Overview", { delay: 1 });
    await userEvent.type(screen.getByLabelText("Runtime"), '123', { delay: 1 });

    await waitFor(() => {
      userEvent.click(screen.getByLabelText("Genre"));
    });
    const documentaryOption = await screen.getByText('Documentary');
    await waitFor(() => {
      userEvent.click(documentaryOption);
    });

    await waitFor(() => {
      userEvent.click(screen.getByText("SUBMIT"))
    });

    expect(ApiService.createMovie).toHaveBeenCalledWith({
         genres: [
           "Documentary",
         ],
         overview: "Some Overview",
         poster_path: "https://www.google.by/",
         release_date: "2020-01-02",
         runtime: 231,
         tagline: "Tagline",
         title: "Some Title",
       });
    expect(ApiService.fetchMovies).toHaveBeenCalled();
    expect(onModalClose).toHaveBeenCalled();
  });


  it("should not submit form by click on submit if values are not filled in", async () => {
    render(<AddMovieModal onClose={onModalClose} />, { wrapper: Wrapper });

    await waitFor(() => {
      userEvent.click(screen.getByText("SUBMIT"))
    });

    expect(ApiService.createMovie).not.toHaveBeenCalled();
    expect(ApiService.fetchMovies).not.toHaveBeenCalled();
    expect(onModalClose).not.toHaveBeenCalled();
  });
});
