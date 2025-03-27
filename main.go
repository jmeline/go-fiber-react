package main

import (
	"log"
	"fmt"

	"github.com/gofiber/fiber/v3"
  "github.com/gofiber/fiber/v3/middleware/cors"
)

type Employee struct {
	Address string		`json:"address"`
	Age uint					`json:"age"`
	EmployeeId uint		`json:"employeeId"`
	FirstName string 	`json:"firstName"`
	LastName string 	`json:"lastName"`
}

func main() {
	// Initialize a new Fiber app
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowHeaders:     []string {"Origin","Content-Type","Accept","Content-Length","Accept-Language","Accept-Encoding","Connection","Access-Control-Allow-Origin"},
		AllowOrigins:     []string {"*"},
		AllowMethods:     []string {"GET","POST","HEAD","PUT","DELETE","PATCH","OPTIONS"},
	}))

	database := map[int]Employee {
		1: {
			EmployeeId: 1,
			FirstName: "John",
			LastName: "Wick",
			Age: 30,
			Address: "Fantasy land",
		},
		2: {
			EmployeeId: 2,
			FirstName: "Adam",
			LastName: "Sandler",
			Age: 35,
			Address: "Hollywood, CA",
		},
		3: {
			EmployeeId: 3,
			FirstName: "Frodo",
			LastName: "Baggins",
			Age: 40,
			Address: "The Shire",
		},
	}

	// Define a route for the GET method on the root path '/'
	// Example requests:
	// http://localhost:33333/1
	// http://localhost:33333/2
	// http://localhost:33333/3
	app.Get("/:id", func(c fiber.Ctx) error {
		id := fiber.Params[int](c, "id")

		fmt.Println(id)

		// Send a string response to the client
		return c.JSON(database[id])
	})

	// Start the server on port 3000
	log.Fatal(app.Listen(":33333"))
}
