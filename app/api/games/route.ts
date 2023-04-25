import {NextRequest} from "next/server";
import {redirect} from "next/navigation";

export async function POST(request: NextRequest) {
    let title = request.body.title;
    console.log(title);
    redirect('/games/new');
}