package main

import (
	"github.com/gin-gonic/gin"
	"github.com/henlies/sa-65-example/controller"
	"github.com/henlies/sa-65-example/entity"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	// Admin Routes
	r.GET("/admins", controller.ListAdmins)
	r.GET("/admin/:id", controller.GetAdmin)

	// Doctor Routes
	r.GET("/doctors", controller.ListDoctors)
	r.GET("/doctor/:id", controller.GetDoctor)
	r.POST("/doctors", controller.CreateDoctor)

	// WorkPlace Routes
	r.GET("/workplaces", controller.ListWorkplaces)

	// MedicalField Routes
	r.GET("/medicalfields", controller.ListMedicalfield)

	// login User Route
	r.POST("/Login", controller.Login)

	// Run the server _go run main.go
	r.Run()
}
