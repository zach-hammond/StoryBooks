export default async function Page({params,}: { params: { gameId: string } }) {
    // const games = await GameService.listGames();
    return (<div>Page for game: {params.gameId}</div>);
}