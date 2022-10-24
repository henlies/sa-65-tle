import { AdminsInterface } from "./IAdmin";
import { WorkPlacesInterface } from "./IWorkPlace";
import { MedicalFieldsInterface } from "./IMedicalField";

export interface DoctorsInterface {

    ID?: number,
    PersonalID: number;
    Name: string;
    Position: string;
    Email: string;
    Password: string;
    Salary: number;
    Tel: string;
    Gender: string;
    DateOfBirth: Date | null;
    YearOfStart: Date | null;
    Address: string;

    AdminID?: number;
    Admin: AdminsInterface;
    WorkPlaceID?: number;
    WorkPlace: WorkPlacesInterface;
    MedicalFieldID?: number;
    MedicalField: MedicalFieldsInterface;

   }