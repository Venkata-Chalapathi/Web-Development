import java.util.*;

public class SnakesAndLadders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        Map<Integer, Integer> board = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int start = scanner.nextInt();
            int end = scanner.nextInt();
            board.put(start, end);
        }

        List<Integer> diceRolls = new ArrayList<>();
        while (scanner.hasNextInt()) {
            diceRolls.add(scanner.nextInt());
        }
        int targetPosition = diceRolls.remove(diceRolls.size() - 1); 
        int finalPosition = playGame(board, diceRolls);
        
        if (finalPosition == targetPosition) {
            System.out.println("Not affected");
            return;
        }

        for (Map.Entry<Integer, Integer> entry : board.entrySet()) {
            int start = entry.getKey();
            int end = entry.getValue();
            board.put(start, (start > end) ? start + Math.abs(start - end) : start - Math.abs(end - start));
            if (playGame(board, diceRolls) == targetPosition) {
                String type = (start > end) ? "Snake" : "Ladder";
                System.out.println(type + " " + start + " " + board.get(start));
                return;
            }
            board.put(start, end);
        }

        System.out.println("Not reachable");
    }

    private static int playGame(Map<Integer, Integer> board, List<Integer> diceRolls) {
        int position = 1; 
        for (int roll : diceRolls) {
            position += roll; 
            if (position > 100) break; 
            if (board.containsKey(position)) position = board.get(position); 
        }
        return position; 
    }
}
