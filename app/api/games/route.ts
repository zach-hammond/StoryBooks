import {NextRequest} from "next/server";
import {redirect} from "next/navigation";
import GameService from "@/lib/GameService";
import {getToken} from "next-auth/jwt";

export async function POST(request: NextRequest) {
    const token = await getToken({ req: request });
    const form = await request.formData();
    const userId = parseInt(token.sub);
    const title = form.get('title');
    const privateGame = form.get('privateGame');
    await GameService.addGame(title, !!privateGame, userId);
    redirect('/games');
}
