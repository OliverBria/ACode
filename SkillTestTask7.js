
import java.util.Scanner;

public class Main {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int far = sc.nextInt();
        int cel = (far - 32) * 5/9;
        System.out.printf("%d Fahrenheit is %d Celsius", far, cel);




let f = c * (9/5) + 32;
let c = (f - 32) * (5/9);