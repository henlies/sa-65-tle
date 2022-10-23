package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/henlies/sa-65-example/entity"
)

// POST /Doctors
func CreateDoctor(c *gin.Context) {
	var doctor entity.Doctor
	var admin entity.Admin
	var workplace entity.WorkPlace
	var medicalfield entity.MedicalField

	// 8. จะถูก bind เข้าตัวแปร doctor
	if err := c.ShouldBindJSON(&doctor); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 9. ค้นหา workplace ด้วย id
	if tx := entity.DB().Where("id = ?", doctor.WorkPlaceID).First(&workplace); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "workplace not found"})
		return
	}

	// 10. ค้นหา admin ด้วย id
	if tx := entity.DB().Where("id = ?", doctor.AdminID).First(&admin); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "admin not found"})
		return
	}

	// 11. ค้นหา medicalfield ด้วย id
	if tx := entity.DB().Where("id = ?", doctor.MedicalFieldID).First(&medicalfield); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "medicalfield not found"})
		return
	}

	// 12. สร้าง Doctor
	dt := entity.Doctor{
		Admin:        admin,              // โยงความสัมพันธ์กับ Entity admin
		WorkPlace:    workplace,          // โยงความสัมพันธ์กับ Entity workplace
		MedicalField: medicalfield,       // โยงความสัมพันธ์กับ Entity medicalfield
		PersonalID:   doctor.PersonalID,  // ตั้งค่าฟิลด์ PersonalID
		Name:         doctor.Name,        // ตั้งค่าฟิลด์ Name
		Position:     doctor.Position,    // ตั้งค่าฟิลด์ Position
		Email:        doctor.Email,       // ตั้งค่าฟิลด์ Email
		Password:     doctor.Password,    // ตั้งค่าฟิลด์ Password
		Salary:       doctor.Salary,      // ตั้งค่าฟิลด์ Salary
		Tel:          doctor.Tel,         // ตั้งค่าฟิลด์ Tel
		Gender:       doctor.Gender,      // ตั้งค่าฟิลด์ Gender
		DateOfBirth:  doctor.DateOfBirth, // ตั้งค่าฟิลด์ DateOfBirth
		YearOfStart:  doctor.YearOfStart, // ตั้งค่าฟิลด์ YearOfStart
		Address:      doctor.Address,     // ตั้งค่าฟิลด์ Address

	}

	// 13. บันทึก
	if err := entity.DB().Create(&dt).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": dt})
}

// GET /Doctor/:id
func GetDoctor(c *gin.Context) {
	var doctor entity.Doctor
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM doctors WHERE id = ?", id).Scan(&doctor).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": doctor})
}

// GET /Doctors
func ListDoctors(c *gin.Context) {
	var doctors []entity.Doctor
	if err := entity.DB().Preload("Admin").Preload("WorkPlace").Preload("MedicalField").Raw("SELECT * FROM doctors").Find(&doctors).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": doctors})
}
