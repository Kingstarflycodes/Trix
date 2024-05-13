package main

import (
	"html/template"
	"net/http"
)

func main() {
	// Parse HTML template
	tmpl := template.Must(template.ParseFiles("/templates/index.html"))

	// Define a handler function to render the template
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, nil)
	})

	// Start the HTTP server
	http.ListenAndServe(":8080", nil)
}
