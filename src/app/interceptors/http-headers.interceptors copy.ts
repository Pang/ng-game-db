import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders: {
            //     'x-rapidapi-key' : '',
            //     'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
            // },
            setParams: {
                key: 'a1524f8bee1e47968c89ef21e412ee05'
            }
        })
        return next.handle(req);
    }
}
