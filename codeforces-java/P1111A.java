import java.util.Scanner;

public class P1111A {

    public static void main(String[] args) {
        solve();
    }

    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        String s1 = scanner.nextLine();
        String s2 = scanner.nextLine();
        if (s1.length() != s2.length()) {
            System.out.println("NO");
            return;
        }

        for (int i = 0; i < s1.length(); i++) {
            if (isVowel(s1.charAt(i)) && !isVowel(s2.charAt(i)) ||
                    !isVowel(s1.charAt(i)) && isVowel(s2.charAt(i))) {
                System.out.println("NO");
                return;
            }
        }
        System.out.println("YES");
    }

    static int[] vowel = new int[700];

    static {
        vowel['a'] = 1;
        vowel['e'] = 1;
        vowel['i'] = 1;
        vowel['o'] = 1;
        vowel['u'] = 1;
    }

    public static boolean isVowel(char a) {

        return vowel[a] == 1;
    }
}