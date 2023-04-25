import GameService from "@/lib/GameService";
import Link from "next/link";

export default async function Page() {
    const games = await GameService.listGames();
    return (<div>
        <h1>All Games</h1>
        <Link href="/games/new">New Game</Link>
        <table>
            {games.map(g => (
                <tr>
                    <td><Link href={"/games/" + g.id}>{g.title}</Link></td>
                </tr>
            ))}
        </table>
    </div>);
}