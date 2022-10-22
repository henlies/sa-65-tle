package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/henlies/sa-65-example/entity"
)

// GET /workplaces
func ListWorkplaces(c *gin.Context) {
	var workplaces []entity.WorkPlace
	if err := entity.DB().Raw("SELECT * FROM work_places").Scan(&workplaces).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": workplaces})
}
