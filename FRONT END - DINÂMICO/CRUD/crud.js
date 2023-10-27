
document.addEventListener("DOMContentLoaded", function () {
    const moviesList = document.getElementById("movies-list");
    const addMovieButton = document.getElementById("add-movie-button");
    const movieForm = document.getElementById("movie-form");
    const saveMovieButton = document.getElementById("save-movie-button");
    const cancelButton = document.getElementById("cancel-button");
    const deleteConfirmation = document.getElementById("delete-confirmation");
    const confirmDeleteButton = document.getElementById("confirm-delete-button");
    const cancelDeleteButton = document.getElementById("cancel-delete-button");
    let editingMovieId = null; // Armazena o ID do filme em edição.

    const API_URL = "https://crudcrud.com/api/e805ec90f6774248bac793e7a3cdc7f9/movies";

    function listMovies() {
        fetch(API_URL)
            .then((response) => response.json())
            .then((movies) => {
                moviesList.innerHTML = "";
                movies.forEach((movie) => {
                    const movieCard = createMovieCard(movie);
                    moviesList.appendChild(movieCard);
                });
            })
            .catch((error) => console.error("Erro ao listar filmes:", error));
    }

    function createMovieCard(movie) {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" width="150"><br>
            <strong>${movie.title}</strong><br>
            ${movie.genre}<br>
            ${movie.year}<br>
            <button class="edit-button py-2 mb-1 px-4 text-bg-secondary border border-secondary rounded-pill text-center" data-id="${movie._id}">Editar</button><br>
            <button class="delete-button py-2 px-4 text-bg-secondary border border-secondary rounded-pill text-center" data-id="${movie._id}">Excluir</button>
        `;

        const editButton = movieCard.querySelector(".edit-button");
        const deleteButton = movieCard.querySelector(".delete-button");

        editButton.addEventListener("click", () => editMovie(movie._id));
        deleteButton.addEventListener("click", () => showDeleteConfirmation(movie._id));

        return movieCard;
    }

    function saveMovie() {
        // Desabilite o botão "Salvar" durante a execução da solicitação.
        saveMovieButton.disabled = true;
    
        const titleInput = document.getElementById("title");
        const genreInput = document.getElementById("genre");
        const yearInput = document.getElementById("year");
        const imageInput = document.getElementById("image");
        const descriptionInput = document.getElementById("description");

        // Valide os campos antes de adicionar o filme.
        if (titleInput.value && genreInput.value && yearInput.value && imageInput.value && descriptionInput.value) {
            const movieData = {
                title: titleInput.value,
                genre: genreInput.value,
                year: yearInput.value,
                image: imageInput.value,
                description: descriptionInput.value,
            };

            if (editingMovieId) {
                // Se estamos editando um filme, faça uma solicitação PUT para atualizá-lo.
                fetch(API_URL + `/${editingMovieId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(movieData),
                })
                    .then(() => {
                        clearForm();
                        movieForm.classList.add("hidden");
                        editingMovieId = null; // Limpe o ID de edição.
                        listMovies();
                    })
                    .catch((error) => console.error("Erro ao editar filme:", error))
                    .finally(() => {
                        // Reabilite o botão "Salvar" após a conclusão da solicitação.
                        saveMovieButton.disabled = false;
                    });
            } else {
                // Caso contrário, estamos criando um novo filme, faça uma solicitação POST para criar um novo filme.
                fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(movieData),
                })
                    .then(() => {
                        clearForm();
                        movieForm.classList.add("hidden");
                        listMovies();
                    })
                    .catch((error) => console.error("Erro ao salvar filme:", error))
                    .finally(() => {
                        // Reabilite o botão "Salvar" após a conclusão da solicitação.
                        saveMovieButton.disabled = false;
                    });
            }
        } else {
            // Se algum campo estiver vazio, exiba uma mensagem de erro.
            alert("Por favor, preencha todos os campos antes de adicionar o filme.");
            saveMovieButton.disabled = false; // Reabilite o botão "Salvar".
        }
    }

    function editMovie(id) {
        fetch(API_URL + `/${id}`)
            .then((response) => response.json())
            .then((movieToEdit) => {
                document.getElementById("title").value = movieToEdit.title;
                document.getElementById("genre").value = movieToEdit.genre;
                document.getElementById("year").value = movieToEdit.year;
                document.getElementById("image").value = movieToEdit.image;
                document.getElementById("description").value = movieToEdit.description;

                showMovieForm(movieToEdit);
                editingMovieId = id; // Defina o ID do filme em edição.
            })
            .catch((error) => console.error("Erro ao editar filme:", error));
    }

    function clearForm() {
        document.getElementById("title").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("year").value = "";
        document.getElementById("image").value = "";
        document.getElementById("description").value = "";
    }

    function showMovieForm(movieData) {
        movieForm.classList.remove("hidden");

        if (movieData) {
            document.getElementById("title").value = movieData.title;
            document.getElementById("genre").value = movieData.genre;
            document.getElementById("year").value = movieData.year;
            document.getElementById("image").value = movieData.image;
            document.getElementById("description").value = movieData.description;
        }
    }

    function showDeleteConfirmation(id) {
        deleteConfirmation.classList.remove("hidden");

        confirmDeleteButton.addEventListener("click", () => {
            // Desabilita o botão de exclusão para evitar cliques múltiplos.
            confirmDeleteButton.disabled = true;

            deleteMovie(id);
            deleteConfirmation.classList.add("hidden");
        });

        cancelDeleteButton.addEventListener("click", () => {
            deleteConfirmation.classList.add("hidden");
        });
    }

    function deleteMovie(id) {
        fetch(API_URL + `/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                // Atualize a interface após a exclusão.
                listMovies();
            })
            .catch((error) => console.error("Erro ao excluir filme:", error))
            .finally(() => {
                // Reabilite o botão de exclusão após a solicitação ser concluída.
                confirmDeleteButton.disabled = false;
            });
    }

    // Adicione esta parte para corrigir o botão de adicionar
    addMovieButton.addEventListener("click", () => {
        showMovieForm();
        saveMovieButton.removeEventListener("click", saveEditedMovie);
        saveMovieButton.addEventListener("click", saveMovie);
    });
    clearForm ()
    listMovies();

    saveMovieButton.addEventListener("click", () => saveMovie());
    cancelButton.addEventListener("click", () => movieForm.classList.add("hidden"));
});
