package com.company;

import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;


public class Main {

    public static void main(String[] args) throws IOException {
    simplestServerExample();
    }

    public static void simplestServerExample() throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress("localhost", 8001), 0);
        server.createContext("/back", new SimplestServerHttpHandler());
        server.start();
        System.out.println(System.lineSeparator() + "\033[1;32mServer started at:\tlocalhost:8001\u001B[0m");

    }
}
