package com.company;

import java.util.Locale;

public class UtilityFormat {
    public static String CorrectFullName(String str){
        str = str.strip();
        if (Character.isUpperCase(str.charAt(0))) {
            return str;
        } else {
            return Character.toUpperCase(str.charAt(0)) + str.substring(1, str.length());
        }
    }

    public static double hundredFormat(double number){
       return number*100/12;
    }

    public static String format_number(double number) {
        Locale locale = Locale.getDefault();
        Locale.setDefault(Locale.US);
        String result = String.format("%3.1f", number);
        Locale.setDefault(locale);
        return result;
    }
}
