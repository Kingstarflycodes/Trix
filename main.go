package main

import (
	"net/http"
)

func main() {
	// Serve all files from the "templates" directory
	http.Handle("/", http.FileServer(http.Dir("templates")))

	// Start the HTTP server
	http.ListenAndServe(":8080", nil)
}
