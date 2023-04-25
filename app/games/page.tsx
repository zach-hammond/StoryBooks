import GameService from "@/lib/GameService";

export default async function Page() {
    const games = await GameService.listGames();
    return (<div>
        {games.map(g => (
            <div>{g.title}</div>
        ))}
    </div>);
}