package com.company;

import java.util.ArrayList;

public class Enrollees {
    private ArrayList<Enrollee> enrollees;

    public Enrollees(){
        enrollees=new ArrayList<>();
    }

    public void add(Enrollee enrollee){
        enrollees.add(enrollee);
    }

    public int getSize(){
        return enrollees.size();
    }
    public Enrollee getByIndex(int index){
        return enrollees.get(index);
    }

    public ArrayList<Enrollee> get(){
        return this.enrollees;
    }

    /**
     * Добавление новой записи после записи с указанной фамилией.
     * @param enrollee1
     * @param surname
     */
    public void add(Enrollee enrollee1,String surname){
        int index=-1;
        for (int i = 0; i < enrollees.size(); i++) {
            if(enrollees.get(i).getSurname().equals(UtilityFormat.CorrectFullName(surname))){
                index=i;

            }
        }
        enrollees.add(index+1,enrollee1);
    }

    /**
     * Выдача сведений об абитуриенте с указанной фамилией;
     * @param surname
     * @return
     */
    public ArrayList<Enrollee> getEnrolleeBySurname(String surname){
        surname=UtilityFormat.CorrectFullName(surname);
        ArrayList<Enrollee> enrolleesBySurname=new ArrayList<Enrollee>();
        for(Enrollee enrollee: enrollees){
            if(enrollee.getSurname().equals(surname)){
                enrolleesBySurname.add(enrollee);
            }
        }
        return enrolleesBySurname;
    }

    /**
     * Удаление записей о медалистах со средним баллом аттестата ниже заданного
     * @param averageMark
     */
    public void removeMedalIsWithBelowAverageMark(double averageMark){
        for (int i = 0; i < enrollees.size(); i++) {
            if(enrollees.get(i).getTypeMedal()!=TypeMedal.NO && enrollees.get(i).getAverageMarkCertificate()<averageMark){
                enrollees.remove(enrollees.get(i));
            }
        }

    }

    /**
     * Выдача сведений о всех абитуриентах на данную специальность с отображением оценок в 100-бальной системе
     * @param speciality
     * @return
     */
    public ArrayList<Enrollee> getEnrolleesBySpeciality(String speciality) {
        ArrayList<Enrollee> enrolleesBySpeciality=new ArrayList<Enrollee>();
        for(Enrollee enrollee: enrollees){
            if(enrollee.getSpeciality().equals(speciality)){
                enrollee.setAverageMarkCertificate(UtilityFormat.hundredFormat(enrollee.getAverageMarkCertificate()));
                enrolleesBySpeciality.add(enrollee);
            }
        }
        return enrolleesBySpeciality;
    }

    @Override
    public String toString() {
        return  ""+ enrollees  ;
    }
}
