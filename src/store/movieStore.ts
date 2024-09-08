import { IMovie } from '@/interface/imovie';
import { create } from 'zustand'

interface MovieStore {
	movies: IMovie[];
	addMovie: (movie: IMovie) => void;
	getMovieById: (id: number) => IMovie | undefined;
	modifyQuantity: (id: number, amount: number) => void;
	modifyQuantityByInput: (id: number, newQuantity: number) => void;
	removeMovie: (id: number) => void;
	resetMovies: () => void;
	getTotalQuantity: () => number;
	getTotalValue: () => number;
}

export const movieStore = create<MovieStore>((set, get) => ({
	movies: [],

	// Adiciona um filme ao carrinho, caso já exista, incrementa a quantidade
	addMovie: (newMovie) =>
		set((state) => {
			const existingMovie = state.movies.find((movie) => movie.id === newMovie.id);

			if (existingMovie) {
				return {
					movies: state.movies.map((movie) =>
						movie.id === newMovie.id
							? { ...movie, quantity: (movie.quantity ?? 0) + 1 }
							: movie
					),
				};
			}

			return {
				movies: [...state.movies, { ...newMovie, quantity: 1 }],
			};
		}),

	// Função para buscar o filme por id
	getMovieById: (id) => (get().movies.find((movie: IMovie) => movie.id === id)),

	// Modifica a quantidade de um filme no carrinho
	modifyQuantity: (id: number, amount: number) =>
		set((state) => ({
			movies: state.movies.map((movie: IMovie) =>
				movie.id === id && (movie.quantity ?? 0) + amount >= 0
					? { ...movie, quantity: (movie.quantity ?? 0) + amount }
					: movie
			),
		})),

	// Modifica a quantidade de um filme no carrinho
	modifyQuantityByInput: (id, newQuantity) =>
		set((state) => ({
			movies: state.movies.map((movie) =>
				movie.id === id && newQuantity >= 0
					? { ...movie, quantity: newQuantity }
					: movie
			),
		})),

	// Remove um filme do carrinho
	removeMovie: (id: number) =>
		set((state) => ({
			movies: state.movies.filter((movie: IMovie) => movie.id !== id),
		})),

	// Reseta o carrinho
	resetMovies: () => set({ movies: [] }),

	// Função para obter a quantidade total de itens
	getTotalQuantity: () => {
		const { movies } = get();
		return movies.reduce((total, movie) => total + (movie.quantity ?? 0), 0);
	},

	// Função para obter o valor total dos itens
	getTotalValue: () => {
		const { movies } = get();
		return movies.reduce((total, movie) => total + movie.price * (movie.quantity ?? 0), 0);
	},
}));
