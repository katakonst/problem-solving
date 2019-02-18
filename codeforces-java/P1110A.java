import java.util.Scanner;

public class P1110A {

    public static void main(String[] args) {
        solve();
    }

    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        int b = scanner.nextInt();
        int k = scanner.nextInt();
        int s = 0;
        for (int i = 0; i < k; i++) {
            int nr = scanner.nextInt();
            int t1 = nr % 2 == 1 && b % 2 == 1 ? 1 : 2;
            if(i==k-1){
                t1 = nr % 2 == 1 ? 1 : 2;
            }
            if (s == 0) {
                s = t1;
            } else {
                s = s % 2 == 0 && t1 == 1 || s%2==1 && t1==2  ? 1 : 2;
            }
        }
        System.out.println(s==1?"odd":"even");
    }
}
