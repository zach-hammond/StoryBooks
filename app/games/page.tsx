import GameService from "@/lib/GameService";
import Link from "next/link";

export default async function Page() {
    const games = await GameService.listGames();
    return (<div>
        <h1>All Games</h1>
        <Link href="/games/new">New Game</Link>
        <table>
            <tr>
                <th>Title</th>
                <th>Pool size</th>
                <th>#Participants</th>
            </tr>
            {games.map(g => (
                <tr>
                    <td><Link href={"/games/" + g.id}>{g.title}</Link></td>
                    <td>{g.wagers.reduce((sum, w) => sum + w.amount, 0)}</td>
                    <td>{g.wagers.length}</td>
                </tr>
            ))}
        </table>
    </div>);
}