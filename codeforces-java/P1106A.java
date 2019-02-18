import java.util.Scanner;

public class P1106A {

    public static void main(String[] args) {
        solve();
    }

    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        for (int i = 0; i <size; i++) {
            String ln = scanner.next();
            for (int j = 0; j < ln.length(); j++) {
                mat[i][j] = ln.charAt(j) == '.' ? 9 : 1;
            }
        }

        int cr = 0;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (i > 0 && j > 0 && mat[i][j] == mat[i - 1][j - 1]
                        && mat[i - 1][j - 1] == mat[i - 1][j + 1]
                        && mat[i - 1][j + 1] == mat[i + 1][j - 1]
                        && mat[i + 1][j - 1] == mat[i + 1][j + 1]
                        && mat[i][j] == 1) {
                    cr++;
                }
            }
        }
        System.out.println(cr);
    }

    static int[][] mat = new int[510][510];
}