package com.company;

import java.time.LocalDateTime;

public class Enrollee {
    private int registrationNumber;
    private String name;
    private String surname;
    private String patronymic;
    private LocalDateTime dateBirth;
    private int markEntranceExam1;
    private int markEntranceExam2;
    private int markEntranceExam3;
    private double averageMarkCertificate;
    private TypeMedal typeMedal;
    private String speciality;
    Enrollee(int registrationNumber,String name,String surname,String patronymic,int year,int month, int day,int markEntranceExam1,int markEntranceExam2,int markEntranceExam3,double averageMarkCertificate,TypeMedal typeMedal,String speciality){
        this.setRegistrationNumber(registrationNumber);
        this.setName(name);
        this.setSurname(surname);
        this.setPatronymic(patronymic);
        this.setDateBirth(year, month, day);
        this.setMarkEntranceExam1(markEntranceExam1);
        this.setMarkEntranceExam2(markEntranceExam2);
        this.setMarkEntranceExam3(markEntranceExam3);
        this.setAverageMarkCertificate(averageMarkCertificate);
        this.typeMedal=typeMedal;
        this.setSpeciality(speciality);

    }
    Enrollee(int registrationNumber,String fullName,int year,int month, int day,int markEntranceExam1,int markEntranceExam2,int markEntranceExam3,double averageMarkCertificate,TypeMedal typeMedal,String speciality){
        this.setRegistrationNumber(registrationNumber);
        this.setName(fullName.split(" ")[1]);
        this.setSurname(fullName.split(" ")[0]);
        this.setPatronymic(fullName.split(" ")[2]);
        this.setDateBirth(year, month, day);
        this.setMarkEntranceExam1(markEntranceExam1);
        this.setMarkEntranceExam2(markEntranceExam2);
        this.setMarkEntranceExam3(markEntranceExam3);
        this.setAverageMarkCertificate(averageMarkCertificate);
        this.typeMedal=typeMedal;
        this.setSpeciality(speciality);

    }
    Enrollee(){
    }
    public int getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(int registrationNumber) {
        this.registrationNumber = registrationNumber>0?registrationNumber:0;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = UtilityFormat.CorrectFullName(name);
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = UtilityFormat.CorrectFullName(surname);
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = UtilityFormat.CorrectFullName(patronymic);
    }

    public LocalDateTime getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(int year,int month ,int day) {
        try {
            this.dateBirth = LocalDateTime.of(year,month,day,0,0);
        }catch (Exception e){
            this.dateBirth = LocalDateTime.of(0,0,0,0,0);
        }
    }

    public int getMarkEntranceExam1() {
        return markEntranceExam1;
    }

    public void setMarkEntranceExam1(int markEntranceExam1) {
        this.markEntranceExam1 = markEntranceExam1>0?markEntranceExam1:0;
    }

    public int getMarkEntranceExam2() {
        return markEntranceExam2;
    }

    public void setMarkEntranceExam2(int markEntranceExam2) {
        this.markEntranceExam2 = markEntranceExam2>0?markEntranceExam2:0;
    }

    public int getMarkEntranceExam3() {
        return markEntranceExam3;
    }

    public void setMarkEntranceExam3(int markEntranceExam3) {
        this.markEntranceExam3 = markEntranceExam3>0?markEntranceExam3:0;
    }

    public double getAverageMarkCertificate() {
        return averageMarkCertificate;
    }

    public void setAverageMarkCertificate(double averageMarkCertificate) {
        this.averageMarkCertificate = averageMarkCertificate>0?averageMarkCertificate:0;
    }

    public TypeMedal getTypeMedal() {
        return typeMedal;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    @Override
    public String toString() {
        return "{" +
                "\"registrationNumber\":" + registrationNumber +
                ", \"name\":" +"\""+ name + "\"" +
                ", \"surname\":" + "\""+surname + "\"" +
                ", \"patronymic\":" + "\""+patronymic + "\"" +
                ", \"dateBirth\":" + "\""+dateBirth.getDayOfMonth()+"."+dateBirth.getMonthValue()+"."+dateBirth.getYear()+ "\""+
                ", \"markEntranceExam1\":" + markEntranceExam1 +
                ", \"markEntranceExam2\":" + markEntranceExam2 +
                ", \"markEntranceExam3\":" + markEntranceExam3 +
                ", \"averageMarkCertificate\":" + UtilityFormat.format_number(averageMarkCertificate) +
                ", \"typeMedal\":" + "\""+typeMedal +"\""+
                ", \"speciality\":" + "\""+speciality +"\""+
                "}\n";
    }
}
