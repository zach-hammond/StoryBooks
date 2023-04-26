import Link from "next/link";
import GameService from "@/lib/GameService";
import CloseGame from "@/app/games/[gameId]/CloseGame";

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
            {game.outcome == null && (
                <Link href={"/games/" + params.gameId + "/wagers/new"}><button>New Wager</button></Link>
            )}
            <div>
                Current odds: {totalFalse}/{totalTrue}
            </div>
            <div>
                Outcome: {game.outcome != null ? (game.outcome ? 'Yes' : 'No') : ''}
            </div>
            <hr/>
            <div>Wagers</div>
            <table>
                <tr>
                    <th>User</th>
                    <th>Outcome</th>
                    <th>Amount</th>
                    <th>Payout</th>
                </tr>
                {game.wagers.map(w => (
                    <tr key={w.id}>
                        <td>{w.user.name}</td>
                        <td>{w.outcome ? 'Yes' : 'No'}</td>
                        <td>{w.amount}</td>
                        <td>{w.payout ? (Math.round(w.payout * 100) / 100).toFixed(2) : ''}</td>
                    </tr>
                ))}
            </table>
            <CloseGame game={game}/>
        </div>
    );
}