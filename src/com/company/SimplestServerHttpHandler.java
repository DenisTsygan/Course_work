package com.company;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;

public class SimplestServerHttpHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange httpExchange) throws IOException {
        String requestParams = null;
        if ("GET".equals(httpExchange.getRequestMethod())) {
            requestParams = getRequestParams(httpExchange);
        }
                returnResponse(httpExchange,requestParams );
    }

    private String getRequestParams(HttpExchange httpExchange) {
        String parameters = httpExchange.getRequestURI().toString().split("\\?")[1];
        return parameters;
    }

    private void returnResponse(HttpExchange httpExchange, String request) throws IOException {
        OutputStream outputStream = httpExchange.getResponseBody();
        StringBuilder response = new StringBuilder("");
        /*Загружаем главную страницу */
        if(request.equals("main")) {
            response.append(new Database().createWeb());
        }
        /*Генерация базы данных*/
        if(request.equals("main/database")){
        response.append(new Database().createDatabase());
        }
        /*Возвращает имена файлов формата json в основной папке Database*/
        if(request.equals("main/loadFiles")){
            response.append(new Database().getNameFilesJson());
        }
        /*Принимаем имя файла и отправляем данные формата json*/
        if(request.contains("main/loadFiles/load")){
            String res=new Database().loadFile(request.split("/")[3]);
            res=res.substring(res.indexOf("["));
            response.append(res);
        }
        /*Принимаем данные таблицы и сохроняем в файл под именем databasev+дата+.json*/
        if(request.contains("main/save")) {
            LocalDateTime date= LocalDateTime.now();
            String fileDate=date.getDayOfMonth()+"-"+date.getMonthValue()+"-"+date.getYear();
            String fileName="databasev"+fileDate+".json";
            new Database().save(fileName,new Database().parseGETreques(request));
        }
        /*Проверяем правильность логина и пароля и возвращаем результативность нашего действия*/
        if(request.contains("main/login")) {
            String login=request.split("/")[2];
            String password=request.split("/")[3];
            response.append("{\"confirm\":\""+new Database().confirmProfile(login,password)+"\"}");
        }
            httpExchange.sendResponseHeaders(0, response.length());
            outputStream.write(response.toString().getBytes());
            outputStream.flush();
            outputStream.close();
        }
}



