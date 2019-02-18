import java.util.Scanner;

public class P1114A {

    public static void main(String[] args) {
        solve();
    }


    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        int[] nrgr = new int[3];
        int[] gr = new int[3];

        for (int i = 0; i < 3; i++) {
            nrgr[i] = scanner.nextInt();
        }

        for (int i = 0; i < 3; i++) {
            gr[i] = scanner.nextInt();
        }

        if (gr[0] < nrgr[0]) {
            System.out.println("NO");
            return;
        }

        gr[0] -= nrgr[0];
        nrgr[0] = 0;
        for (int i = 0; i < 2 && nrgr[1]!=0; i++) {
            if (gr[i] > nrgr[1]) {
                gr[i] -= nrgr[1];
                nrgr[1] = 0;
                break;
            } else {
                nrgr[1] = nrgr[1] - gr[i];
                gr[i] = 0;
            }
        }
        for (int i = 0; i < 3 && nrgr[2]!=0; i++) {
            if (gr[i] > nrgr[2]) {
                gr[i] -= nrgr[2];
                nrgr[2] = 0;
                break;
            } else {
                nrgr[2] = nrgr[2]- gr[i];
                gr[i] = 0;

            }
        }
        for (int i = 0; i < 3; i++) {
            if (nrgr[i] != 0) {
                System.out.println("NO");
                return;
            }
        }
        System.out.println("YES");
    }
}