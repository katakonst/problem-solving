import java.util.Arrays;
import java.util.Scanner;

public class P1106C {

    public static void main(String[] args) {
        solve();
    }

    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) {
            long nr = scanner.nextLong();
            arr[i] = nr;
        }
        Arrays.sort(arr);
        long sum = 0;
        for (int i = 0; i < n / 2; i++) {
            long n2 = arr[n - i - 1];
            sum += (arr[i] + n2) * (arr[i] + n2);
        }
        System.out.println(sum);
    }
}
