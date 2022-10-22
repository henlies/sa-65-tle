package entity

import (
	"time"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("sa-65.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		&Admin{},
		&WorkPlace{},
		&MedicalField{},
		&Doctor{},
	)

	db = database

	Password1, err := bcrypt.GenerateFromPassword([]byte("Janjan@09"), 14)
	Password2, err := bcrypt.GenerateFromPassword([]byte("Inkjizoo$25"), 14)

	// Set Data Admin
	db.Model(&Admin{}).Create(&Admin{
		Ausername: "PasopNiran445",
		Apassword: string(Password1),
		Aname:     "Pasop Panha",
		Tel:       "0933486361",
		Email:     "Pasop@hotmail.com",
	})
	db.Model(&Admin{}).Create(&Admin{
		Ausername: "Operamashell65",
		Apassword: string(Password2),
		Aname:     "Saroj Winai",
		Tel:       "0933486362",
		Email:     "Saroj2@hmail.com",
	})

	// Set Data WorkPlace
	db.Model(&WorkPlace{}).Create(&WorkPlace{
		Pname:    "Outpatient",
		Paddress: "Suranaree 1 floor",
	})
	db.Model(&WorkPlace{}).Create(&WorkPlace{
		Pname:    "Inpatient",
		Paddress: "Suranaree 2, 3 floors",
	})
	db.Model(&WorkPlace{}).Create(&WorkPlace{
		Pname:    "Emergency",
		Paddress: "Suranaree 1 floor",
	})
	db.Model(&WorkPlace{}).Create(&WorkPlace{
		Pname:    "Surgery",
		Paddress: "Suranaree 4 floor",
	})

	// Set Data MedicalField
	db.Model(&MedicalField{}).Create(&MedicalField{
		Bname: "Forensic Medicine",
	})
	db.Model(&MedicalField{}).Create(&MedicalField{
		Bname: "Pediatrics",
	})
	db.Model(&MedicalField{}).Create(&MedicalField{
		Bname: "Surgery",
	})
	db.Model(&MedicalField{}).Create(&MedicalField{
		Bname: "Radiology",
	})

	// fk admin
	var PasopNiran445 Admin
	var Operamashell65 Admin
	db.Raw("SELECT * FROM admins WHERE email = ?", "Pasop@hotmail.com").Scan(&PasopNiran445)
	db.Raw("SELECT * FROM admins WHERE email = ?", "Saroj2@hmail.com").Scan(&Operamashell65)

	// fk workplace
	var Outpatient WorkPlace
	var Inpatient WorkPlace
	var Emergency WorkPlace
	var Surgery WorkPlace
	db.Raw("SELECT * FROM work_places WHERE pname = ?", "Outpatient").Scan(&Outpatient)
	db.Raw("SELECT * FROM work_places WHERE pname = ?", "Inpatient").Scan(&Inpatient)
	db.Raw("SELECT * FROM work_places WHERE pname = ?", "Emergency").Scan(&Emergency)
	db.Raw("SELECT * FROM work_places WHERE pname = ?", "Surgery").Scan(&Surgery)

	// fk medicalfield
	var For MedicalField
	var Ped MedicalField
	var Sur MedicalField
	var Rad MedicalField
	db.Raw("SELECT * FROM medical_fields WHERE bname = ?", "ForensicMedicine").Scan(&For)
	db.Raw("SELECT * FROM medical_fields WHERE bname = ?", "Pediatrics").Scan(&Ped)
	db.Raw("SELECT * FROM medical_fields WHERE bname = ?", "Surgery").Scan(&Sur)
	db.Raw("SELECT * FROM medical_fields WHERE bname = ?", "Radiology").Scan(&Rad)

	// set time
	timedate1 := time.Date(1987, 2, 16, 0, 0, 0, 0, time.Local)
	timeyear1 := time.Date(1999, 3, 22, 0, 0, 0, 0, time.Local)
	timedate2 := time.Date(1989, 9, 9, 0, 0, 0, 0, time.Local)
	timeyear2 := time.Date(2001, 1, 8, 0, 0, 0, 0, time.Local)
	timedate3 := time.Date(1985, 5, 13, 0, 0, 0, 0, time.Local)
	timeyear3 := time.Date(1997, 4, 24, 0, 0, 0, 0, time.Local)

	// Set Data Doctor
	db.Model(&Doctor{}).Create(&Doctor{
		PersonalID:   1430099536148,
		Name:         "Phonsak songsang",
		Position:     "H.Surgery",
		Email:        "Phon@gmail.com",
		Password:     "Phonsak01",
		Salary:       35500,
		Tel:          "0653215252",
		Gender:       "Male",
		DateOfBirth:  timedate1,
		YearOfStart:  timeyear1,
		Address:      "219 m.10, nongprajak s, nongsham d, Ayutthaya 13000",
		Admin:        PasopNiran445,
		WorkPlace:    Surgery,
		MedicalField: Sur,
	})
	db.Model(&Doctor{}).Create(&Doctor{
		PersonalID:   1425625963257,
		Name:         "Hanoi slotmachine",
		Position:     "h.Surgery",
		Email:        "Hanoi@hotmail.in.th",
		Password:     "Hanoiploy",
		Salary:       29500,
		Tel:          "0562354210",
		Gender:       "Female",
		DateOfBirth:  timedate2,
		YearOfStart:  timeyear2,
		Address:      "157 m.1, seesad s, dokpeeb d, Nakhonratchasima 30000",
		Admin:        Operamashell65,
		WorkPlace:    Surgery,
		MedicalField: Sur,
	})
	db.Model(&Doctor{}).Create(&Doctor{
		PersonalID:   1895632542256,
		Name:         "Kanokthip Lamai",
		Position:     "Surgery",
		Email:        "Kanok@hotmail.com",
		Password:     "Pookpik05",
		Salary:       24000,
		Tel:          "0819656265",
		Gender:       "Male",
		DateOfBirth:  timedate3,
		YearOfStart:  timeyear3,
		Address:      "426 m.6, yabyol s, nangrong d, Buriram 31000",
		Admin:        PasopNiran445,
		WorkPlace:    Surgery,
		MedicalField: Sur,
	})

	// fk doctor
	var Phonsak Doctor
	var Hanoi Doctor
	var Kanokthip Doctor
	db.Raw("SELECT * FROM doctors WHERE name = ?", "Radiology").Scan(&Phonsak)
	db.Raw("SELECT * FROM doctors WHERE name = ?", "Radiology").Scan(&Hanoi)
	db.Raw("SELECT * FROM doctors WHERE name = ?", "Radiology").Scan(&Kanokthip)

}
