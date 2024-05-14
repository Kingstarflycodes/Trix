package main

import (
	"database/sql"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3"

	"golang.org/x/crypto/bcrypt"
)

func main() {
	// Serve all files from the "templates" directory
	http.Handle("/", http.FileServer(http.Dir("templates")))

	// Start the HTTP server
	http.ListenAndServe(":8080", nil)

	// Initialize the database connection
	db, err := sql.Open("sqlite3", "./database/users.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Create the user table if it doesn't exist
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			email TEXT UNIQUE,
			password TEXT,
			avatar TEXT,
			location TEXT,
			number TEXT,
			username TEXT
		)
	`)
	if err != nil {
		log.Fatal(err)
	}

	// Handle sign-up form submission
	http.HandleFunc("/signup", func(w http.ResponseWriter, r *http.Request) {
		name := r.FormValue("name")
		email := r.FormValue("email")
		password := r.FormValue("password")

		// Hash the password
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			log.Println("Password hashing error:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// Insert the user into the database
		_, err = db.Exec("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", name, email, hashedPassword)
		if err != nil {
			log.Println("Database insertion error:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// Redirect to route.html
		http.Redirect(w, r, "/route.html", http.StatusSeeOther)
	})

}
