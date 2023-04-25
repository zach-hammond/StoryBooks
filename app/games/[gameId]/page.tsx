import Link from "next/link";
import GameService from "@/lib/GameService";

export default async function Page({params,}: { params: { gameId: string } }) {
    const game = await GameService.getGame(parseInt(params.gameId));
    let totalTrue = 0;
    let totalFalse = 0;
    for (const wager of game.wagers) {
        if (wager.outcome) {
            totalTrue += wager.amount;
        } else {
            totalFalse += wager.amount;
        }
    }
    return (
        <div>
            <h1>{game.title}</h1>
            <Link href={"/games/" + params.gameId + "/wagers/new"}>New Wager</Link>
            <div>
                Current odds: {totalFalse}/{totalTrue}
            </div>
            <table>
                {game.wagers.map(w => (
                    <tr>
                        <td>{w.user.name}</td>
                        <td>{w.outcome ? 'Yes' : 'No'}</td>
                        <td>{w.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}