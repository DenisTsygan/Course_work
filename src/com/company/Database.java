package com.company;


import java.io.*;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Database {
    static String databaseUser;
    static String databasePassword;

    /**
     * Создаем базу даннх основываясь на наших doc файлов, а именно этто файл ФИО и файл специальностей
     * @return
     * @throws IOException
     */
    public Enrollees createDatabase() throws IOException {
        int countEnrollees = 20;
        Enrollees enrollees = new Enrollees();
        Random random = new Random();
        /*Загружаем  данные ФИИО и Специальностей в строковый массив*/
        String[] fullNames = load("FullName.txt");
        String[] speciality = load("Speciality.txt");
        for (int i = 0; i < countEnrollees; i++) {
            enrollees.add(new Enrollee(i + 1, fullNames[i], 2000 + random.nextInt(5), 1 + random.nextInt(11), 1 + random.nextInt(27),
                    random.nextInt(100), random.nextInt(100), random.nextInt(100), random.nextDouble(12), TypeMedal.values()[random.nextInt(TypeMedal.values().length)], speciality[random.nextInt(speciality.length - 1)]));
        }
        /*Задаем логи и пароль как статической поле класса*/
        setDatabaseProfile("admin","qwerty123");
        return enrollees;
    }

    /**
     * Метод чтения файлов в строковый массив
     * @param filename
     * @return
     * @throws IOException
     */
    public String[] load(String filename) throws IOException {
        Scanner scanner = new Scanner(new FileReader(filename));
        StringBuilder str = new StringBuilder();
        while (scanner.hasNextLine()) {
            str.append(scanner.nextLine() + ";");
        }
        scanner.close();
        String[] fullNames;
        return str.toString().split(";");
    }

    /**
     * Запись строки в файл
     * @param filename
     * @param res
     */
    public void save(String filename,String res){
        try {
            FileOutputStream fileOut = new FileOutputStream(filename);
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(res);
            out.close();
            fileOut.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    /**
     * Считывание файла в строку
     * @param filename
     * @return
     * @throws IOException
     */
    public String loadFile(String filename) throws IOException {
        Scanner scanner = new Scanner(new FileReader(filename));
        String str = "";
        while (scanner.hasNextLine()) {
            str+=(scanner.nextLine());
            str+=("\n");
        }
        scanner.close();
        return str;
    }

    /**
     * Сгрупировка всех файлов для загрузки страницы это папка Web
     * @return
     * @throws IOException
     */
    public String createWeb() throws IOException {
        String[] parts = loadFile("Web/index.html").toString().split("</script>");
        String result;
        result = parts[0] + "</script>" + "<style>" + loadFile("Web/css/index.css") + "</style>" + parts[1].split("</body>")[0] + "<script>" + loadFile("Web/js/index.js") + "</script>" + "</body>" + parts[1].split("</body>")[1];
        return result;
    }


    /**
     * Получение имен файлов формата json в основной папке Database
     * @return
     */
    public String getNameFilesJson(){
        File dir = new File("..\\Database\\"); //path указывает на директорию
        File[] arrFiles = dir.listFiles();
        List<File> lst =  Arrays.asList(arrFiles);
        String[] array = new String[lst.size()];
        int index=0;
        for (File elem:Arrays.asList(arrFiles)) {
            if(elem.toString().indexOf("json")>0){
                array[index]=elem.toString().split("Database")[1].substring(1);
                index++;
            }
        }
        array= Arrays.copyOf(array,index);
        String arr="";
        for (int i = 0; i < array.length; i++) {
            if(i!= array.length-1){
                arr+="\""+array[i]+"\",";
            }
            else {
                arr+="\""+array[i]+"\"";
            }
        }
        return "{\"fileNames\":["+arr+"]}";
    }

    /**
     * Парсинг GET запроса))) создание на основе этих параметров лист с абитуриентами
     * @param request
     * @return
     */
    public String parseGETreques(String request){
        String arr []=request.split("/");
        int indexName []=new int[Integer.parseInt(arr[arr.length-1])];
        int j=0;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i].equals("name")){
                indexName[j]=i;
                j++;
            }
        }
        Enrollees enrollees1=new Enrollees();
            double average;
            int dop=0;
        for (int i = 0; i < Integer.parseInt(arr[arr.length-1]); i++) {
            if(!arr[indexName[i]+18].equals("typeMedal")){
                average= Double.parseDouble(arr[indexName[i]+17])+Double.parseDouble(arr[indexName[i]+18])/10;
                dop=0;
            }else {
                average=Double.parseDouble(arr[indexName[i]+17]);
                dop=1;
            }
            enrollees1.add( new Enrollee(i+1,arr[indexName[i]+1],arr[indexName[i]+3],arr[indexName[i]+5],Integer.parseInt(arr[indexName[i]+9]),Integer.parseInt(arr[indexName[i]+8]) ,Integer.parseInt(arr[indexName[i]+7])  ,Integer.parseInt(arr[indexName[i]+11]),Integer.parseInt(arr[indexName[i]+13]),Integer.parseInt(arr[indexName[i]+15]),
                    average,TypeMedal.valueOf(arr[indexName[i]+20-dop]),arr[indexName[i]+22-dop]));
        }
        return enrollees1.get().toString();
    }

    /**
     * Установка статического поля класса
     * @param login
     * @param databasePassword
     */
    public void setDatabaseProfile(String login,String databasePassword){
        databaseUser=login;
        this.databasePassword=databasePassword;
    }

    /**
     * Возвращает результат сравнения статических данных с теми которые пришли
     * @param login
     * @param password
     * @return
     */
    public boolean confirmProfile(String login,String password){
        return (databaseUser.equals(login)&&databasePassword.equals(password));
    }
}



