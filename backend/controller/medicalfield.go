package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/henlies/sa-65-example/entity"
)

// GET /medicalfields
func ListMedicalfield(c *gin.Context) {
	var medicalfield []entity.MedicalField
	if err := entity.DB().Raw("SELECT * FROM medical_fields").Scan(&medicalfield).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": medicalfield})
}
