'use client';

import {useSession} from "next-auth/react";

export default function CloseGame({ game }: { game: any }) {
    const {data: session } = useSession();
    if (game?.ownerId == session?.user.id && game?.outcome == null) {
        return (
            <div>
                <hr/>
                <form action={"/api/games/" + game.id} method="post">
                    <h1>Close Game</h1>
                    <div>
                        <label htmlFor="outcome">Outcome:</label>
                        <input type="checkbox" id="outcome" name="outcome"/>
                    </div>
                    <div>
                        <input type="hidden" id="gameId" name="gameId" value={game.id}/>
                        <button type="submit">Close</button>
                    </div>
                </form>
            </div>
        );
    }
    return null;
}