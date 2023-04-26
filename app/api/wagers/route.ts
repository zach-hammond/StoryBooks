import {NextRequest} from "next/server";
import {redirect} from "next/navigation";
import GameService from "@/lib/GameService";
import {getToken} from "next-auth/jwt";

export async function POST(request: NextRequest) {
    const token = await getToken({ req: request });
    const form = await request.formData();
    const userId = parseInt(token.sub);
    const gameId = parseInt(form.get('gameId'));
    const amount = parseInt(form.get('amount'));
    const outcome = form.get('outcome')
    await GameService.addWager(userId, gameId, amount, !!outcome);
    redirect('/games/' + gameId);
}
