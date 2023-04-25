import Link from "next/link";

export default async function Page({params,}: { params: { gameId: string } }) {
    return (
        <div>
            <h1>Page for game: {params.gameId}</h1>
            <Link href={"/games/" + params.gameId + "/wagers/new"}>New Wager</Link>
        </div>
    );
}